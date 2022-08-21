
    'reach 0.1';

    const Params = Object({
        NFT : Token,	
        Bridger : Address,
	 
    });

    const onERC721Received = Fun([Address, Address, UInt, Bytes(4)], Bytes(4));
    
    export const main = Reach.App(() => {
        setOptions({ untrustworthyMaps: true });
        const Creator = Participant('Creator', {
            getParams: Fun([Bytes(15)], Params),
            iDeployed: Fun([Bytes(15)], Null),
        })
        const User = API({
            adminSaveNFT: Fun([],Bool),
            //approveBridge : Fun([], Bool),
	        lockNFT : Fun([], Bool),
	        claimNFT : Fun([], Bool),
            IERC721Receiver : onERC721Received 
        });
        
        const Views = View({
            Creator_v : Address,
            Bridger_v : Address,
            balance_v : UInt,
            balance_NFT_v : UInt,
            //bridgeAppr_v : Bool,
            saved_v : Fun([Address], UInt),
            lockedNFT_v : Bool,	
        });

        init();

        Creator.only(() => {
            const { Bridger,NFT } = declassify(interact.getParams('I have deployed'));
            
        });

        Creator.publish(Bridger,NFT);

        Creator.interact.iDeployed('I HAVE DEPLOYED');

        commit()
        Creator.pay([0,[3, NFT]]);

        const end = UInt.max;
        const startTime = thisConsensusTime();

        //unwrap integer map handler
        const unwInt = (m) => fromSome(m, UInt256(0));
        const unwInt64 = (m) => fromSome(m, 0);
        //unwarap array of 100 UInt
        const unwUintArrMap = (m) => fromSome(m, Array.replicate(100, 0));
        //unwrap boolean map handler
        const unwBool = (m) => fromSome(m, false);

        //Maps
        const saved = new Map(UInt);


        //Sets
        

        const [Bridger_St,lockedNFT_St] = parallelReduce([Bridger,false])
        .invariant(balance() >= 0)
        .while(true)
        .paySpec([NFT])
        .define(() => {
            Views.Creator_v.set(Creator);
            Views.Bridger_v.set(Bridger_St);
            Views.balance_v.set(balance());
            Views.balance_NFT_v.set(balance(NFT));
            //Views.bridgeAppr_v.set(bridgeAppr_St);
            Views.saved_v.set((addr) => unwInt64(saved[addr]));
            Views.lockedNFT_v.set(lockedNFT_St);
        })
        .api(
            User.adminSaveNFT,
            // Assumes
            (() => {
                assume(this == Creator,'Only Backend can save NFT');
                assume(unwInt64(saved[Bridger_St]) == 0, 'one NFT already locked by this bridger');
            }),
            // Payments
            (() => [0, [1, NFT]]),
            // Consensus
            ((res) => {
                require(this == Creator,'Only Backend can save NFT');
                require(unwInt64(saved[Bridger_St]) == 0, 'one NFT already locked by this bridger');

                res(true);
                return [Bridger_St,lockedNFT_St];
            }) 
        )
        .api(
            User.lockNFT,
            // Assumes
            (() => {
                assume(this == Bridger,'You are not the bridger. Only Bridger can bridge NFT on this contract'); 
 		        assume(lockedNFT_St == false,'NFT is already locked. You can only bridge one NFT at a time');
            }),
            // Payments
            (() => [0, [1, NFT]]),
            // Consensus
            ((res) => {
                require(this == Bridger,'You are not the bridger. Only Bridger can bridge NFT on this contract'); 
 		        require(lockedNFT_St == false,'NFT is already locked. You can only bridge one NFT at a time');
                
		        saved[this] = 1;
		        const lockedNFT_Stt = true;

                res(true);
                return [Bridger_St, lockedNFT_Stt];
            })
            
        )
  
        .api(
            User.claimNFT,
            // Assumes
            (() => {
                assume(this == Bridger,'Only Bridger can claim NFT when bridging'); 
                assume(balance(NFT) > 0,'Bridger must have NFT to claim. None available');
            }),
            // Payments
            (() => [0, [0, NFT]]),
            // Consensus
            ((res) => {
                require(this == Bridger,'Only Bridger can claim NFT when bridging'); 
                require(balance(NFT) > 0,'Bridger must have NFT to claim. None available');
                
                transfer(1,NFT ).to(this);

                saved[this] = 0;
                const lockedNFT_Stt = false;

                res(true);
                return [Bridger_St,lockedNFT_Stt];
            })
        )
        .api(
            User.IERC721Receiver,
            // Assumes
            ((a,aa,u,b) => { }),
            // Payments
            ((a,aa,y,b) => [0, [0, NFT]]),
            // Consensus
            ((a,aa,u,b,res) => {
                res('true');
                return [Bridger_St,lockedNFT_St];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [Bridger_St,lockedNFT_St];
        })
        commit();
        exit();
    });   
    