// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  const _Bridger_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async () => {
        
        
        return v508;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _Creator_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async () => {
        
        
        return v486;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_NFT_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async () => {
        
        
        return v528;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async () => {
        
        
        return v517;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _lockedNFT_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async () => {
        
        
        return v509;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saved_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v486, v487, v488, v493] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = svs;
      return (await ((async (_v529 ) => {
          const v529 = stdlib.protect(ctc0, _v529, null);
        
        const v530 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v529), null);
        const v531 = stdlib.fromSome(v530, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
        
        return v531;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Bridger_v: {
        decode: _Bridger_v,
        ty: ctc0
        },
      Creator_v: {
        decode: _Creator_v,
        ty: ctc0
        },
      balance_NFT_v: {
        decode: _balance_NFT_v,
        ty: ctc2
        },
      balance_v: {
        decode: _balance_v,
        ty: ctc2
        },
      lockedNFT_v: {
        decode: _lockedNFT_v,
        ty: ctc3
        },
      saved_v: {
        decode: _saved_v,
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc5],
      4: [ctc0, ctc0, ctc1, ctc0, ctc3, ctc5, ctc2, ctc4, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Bridger: ctc3,
    NFT: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    IERC721Receiver0_79: ctc7,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v473 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v474 = [v473];
  const v480 = 'I have deployed';
  const v481 = stdlib.protect(ctc5, await interact.getParams(v480), {
    at: './index.rsh:39:66:application',
    fs: ['at ./index.rsh:38:21:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v482 = v481.Bridger;
  const v483 = v481.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v482, v483],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v487, v488], secs: v490, time: v489, didSend: v33, from: v486 } = txn1;
      
      const v491 = v474[stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0')];
      const v492 = stdlib.Array_set(v491, '0', stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0'));
      const v493 = stdlib.Array_set(v474, stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0'), v492);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v488
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v487, v488], secs: v490, time: v489, didSend: v33, from: v486 } = txn1;
  const v491 = v474[stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0')];
  const v492 = stdlib.Array_set(v491, '0', stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0'));
  const v493 = stdlib.Array_set(v474, stdlib.checkedBigNumberify('./index.rsh:43:17:dot', stdlib.UInt_max, '0'), v492);
  ;
  ;
  const v496 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v496), {
    at: './index.rsh:45:35:application',
    fs: ['at ./index.rsh:45:35:application call to [unknown function] (defined at: ./index.rsh:45:35:function exp)', 'at ./index.rsh:45:35:application call to "liftedInteract" (defined at: ./index.rsh:45:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v486, v487, v488, v493],
    evt_cnt: 0,
    funcNum: 1,
    lct: v489,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:48:25:decimal', stdlib.UInt_max, '3'), v488]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v499, time: v498, didSend: v45, from: v497 } = txn2;
      
      ;
      const v500 = v493[stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v501 = v500[stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v502 = stdlib.safeAdd(v501, stdlib.checkedBigNumberify('./index.rsh:48:25:decimal', stdlib.UInt_max, '3'));
      const v504 = stdlib.Array_set(v500, '0', v502);
      const v505 = stdlib.Array_set(v493, stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0'), v504);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:48:25:decimal', stdlib.UInt_max, '3'),
        kind: 'to',
        tok: v488
        });
      const v508 = v487;
      const v509 = false;
      const v510 = v498;
      const v516 = v505;
      const v517 = stdlib.checkedBigNumberify('./index.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v527 = v516[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
        const v528 = v527[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v488
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v499, time: v498, didSend: v45, from: v497 } = txn2;
  ;
  const v500 = v493[stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v501 = v500[stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v502 = stdlib.safeAdd(v501, stdlib.checkedBigNumberify('./index.rsh:48:25:decimal', stdlib.UInt_max, '3'));
  const v504 = stdlib.Array_set(v500, '0', v502);
  const v505 = stdlib.Array_set(v493, stdlib.checkedBigNumberify('./index.rsh:48:17:dot', stdlib.UInt_max, '0'), v504);
  ;
  const v506 = stdlib.addressEq(v486, v497);
  stdlib.assert(v506, {
    at: './index.rsh:48:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v508 = v487;
  let v509 = false;
  let v510 = v498;
  let v516 = v505;
  let v517 = stdlib.checkedBigNumberify('./index.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v527 = v516[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
    const v528 = v527[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v486, v487, v488, v508, v509, v516, v517, v527, v528],
        evt_cnt: 0,
        funcNum: 4,
        lct: v510,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:158:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1080, time: v1079, didSend: v394, from: v1078 } = txn4;
          
          ;
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v1079;
          const cv516 = v516;
          const cv517 = v517;
          
          await (async () => {
            const v508 = cv508;
            const v509 = cv509;
            const v510 = cv510;
            const v516 = cv516;
            const v517 = cv517;
            
            if (await (async () => {
              
              return true;})()) {
              const v527 = v516[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
              const v528 = v527[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v488
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc4, ctc3, ctc10, ctc12, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1080, time: v1079, didSend: v394, from: v1078 } = txn4;
      ;
      const v1081 = stdlib.addressEq(v486, v1078);
      stdlib.assert(v1081, {
        at: './index.rsh:158:21:dot',
        fs: ['at ./index.rsh:157:40:application call to [unknown function] (defined at: ./index.rsh:157:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv508 = v508;
      const cv509 = v509;
      const cv510 = v1079;
      const cv516 = v516;
      const cv517 = v517;
      
      v508 = cv508;
      v509 = cv509;
      v510 = cv510;
      v516 = cv516;
      v517 = cv517;
      
      continue;
      }
    else {
      const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn3;
      switch (v635[0]) {
        case 'IERC721Receiver0_79': {
          const v638 = v635[1];
          undefined /* setApiDetails */;
          ;
          const v687 = stdlib.Array_set(v527, '0', v528);
          const v688 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v687);
          ;
          const v694 = 'true';
          await txn3.getOutput('IERC721Receiver', 'v694', ctc6, v694);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v636;
          const cv516 = v688;
          const cv517 = v517;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v516 = cv516;
          v517 = cv517;
          
          continue;
          break;
          }
        case 'adminSaveNFT0_79': {
          const v748 = v635[1];
          undefined /* setApiDetails */;
          ;
          const v795 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v797 = stdlib.Array_set(v527, '0', v795);
          const v798 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v797);
          ;
          const v816 = stdlib.addressEq(v634, v486);
          stdlib.assert(v816, {
            at: './index.rsh:92:24:application',
            fs: ['at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
            msg: 'Only Backend can save NFT',
            who: 'Creator'
            });
          const v817 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
          const v818 = stdlib.fromSome(v817, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
          const v819 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:93:56:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v819, {
            at: './index.rsh:93:24:application',
            fs: ['at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
            msg: 'one NFT already locked by this bridger',
            who: 'Creator'
            });
          const v820 = true;
          await txn3.getOutput('adminSaveNFT', 'v820', ctc10, v820);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v636;
          const cv516 = v798;
          const cv517 = v517;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v516 = cv516;
          v517 = cv517;
          
          continue;
          break;
          }
        case 'claimNFT0_79': {
          const v858 = v635[1];
          undefined /* setApiDetails */;
          ;
          const v907 = stdlib.Array_set(v527, '0', v528);
          const v908 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v907);
          ;
          const v938 = stdlib.addressEq(v634, v487);
          stdlib.assert(v938, {
            at: './index.rsh:133:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          const v939 = v908[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
          const v940 = v939[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
          const v941 = stdlib.gt(v940, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v941, {
            at: './index.rsh:134:24:application',
            fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v947 = stdlib.safeSub(v940, stdlib.checkedBigNumberify('./index.rsh:136:26:decimal', stdlib.UInt_max, '1'));
          const v949 = stdlib.Array_set(v939, '0', v947);
          const v950 = stdlib.Array_set(v908, stdlib.checkedBigNumberify('./index.rsh:136:36:application', stdlib.UInt_max, '0'), v949);
          ;
          await stdlib.mapSet(map0, v634, stdlib.checkedBigNumberify('./index.rsh:138:31:decimal', stdlib.UInt_max, '0'));
          const v951 = true;
          await txn3.getOutput('claimNFT', 'v951', ctc10, v951);
          const cv508 = v508;
          const cv509 = false;
          const cv510 = v636;
          const cv516 = v950;
          const cv517 = v517;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v516 = cv516;
          v517 = cv517;
          
          continue;
          break;
          }
        case 'lockNFT0_79': {
          const v968 = v635[1];
          undefined /* setApiDetails */;
          ;
          const v1015 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1017 = stdlib.Array_set(v527, '0', v1015);
          const v1018 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v1017);
          ;
          const v1069 = stdlib.addressEq(v634, v487);
          stdlib.assert(v1069, {
            at: './index.rsh:110:24:application',
            fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1070 = v509 ? false : true;
          stdlib.assert(v1070, {
            at: './index.rsh:111:32:application',
            fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v634, stdlib.checkedBigNumberify('./index.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1071 = true;
          await txn3.getOutput('lockNFT', 'v1071', ctc10, v1071);
          const cv508 = v508;
          const cv509 = true;
          const cv510 = v636;
          const cv516 = v1018;
          const cv517 = v517;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v516 = cv516;
          v517 = cv517;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _IERC721Receiver4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _IERC721Receiver4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _IERC721Receiver4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc9,
    adminSaveNFT0_79: ctc10,
    claimNFT0_79: ctc10,
    lockNFT0_79: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v572 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:68:57:application call to "runIERC721Receiver0_79" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v588 = ['IERC721Receiver0_79', v572];
  
  const txn1 = await (ctc.sendrecv({
    args: [v486, v487, v488, v508, v509, v516, v517, v527, v528, v588],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:150:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:150:33:decimal', stdlib.UInt_max, '0'), v488]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
      
      switch (v635[0]) {
        case 'IERC721Receiver0_79': {
          const v638 = v635[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v687 = stdlib.Array_set(v527, '0', v528);
          const v688 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v687);
          ;
          const v694 = 'true';
          const v695 = await txn1.getOutput('IERC721Receiver', 'v694', ctc8, v694);
          
          const v1738 = v508;
          const v1739 = v509;
          const v1741 = v688;
          const v1742 = v517;
          const v1743 = v688[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1744 = v1743[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v748 = v635[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v858 = v635[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v968 = v635[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
  switch (v635[0]) {
    case 'IERC721Receiver0_79': {
      const v638 = v635[1];
      undefined /* setApiDetails */;
      ;
      const v687 = stdlib.Array_set(v527, '0', v528);
      const v688 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v687);
      ;
      const v694 = 'true';
      const v695 = await txn1.getOutput('IERC721Receiver', 'v694', ctc8, v694);
      if (v316) {
        stdlib.protect(ctc0, await interact.out(v638, v695), {
          at: './index.rsh:146:13:application',
          fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:153:20:application call to "res" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v1738 = v508;
      const v1739 = v509;
      const v1741 = v688;
      const v1742 = v517;
      const v1743 = v688[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1744 = v1743[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'adminSaveNFT0_79': {
      const v748 = v635[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v858 = v635[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v968 = v635[1];
      return;
      break;
      }
    }
  
  
  };
export async function _adminSaveNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _adminSaveNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _adminSaveNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v536 = ctc.selfAddress();
  const v538 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)', 'at ./index.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'adminSaveNFT'
    });
  const v540 = stdlib.addressEq(v536, v486);
  stdlib.assert(v540, {
    at: './index.rsh:85:23:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)', 'at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)', 'at ./index.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'Only Backend can save NFT',
    who: 'adminSaveNFT'
    });
  const v541 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
  const v542 = stdlib.fromSome(v541, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
  const v543 = stdlib.eq(v542, stdlib.checkedBigNumberify('./index.rsh:86:55:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v543, {
    at: './index.rsh:86:23:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)', 'at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)', 'at ./index.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'one NFT already locked by this bridger',
    who: 'adminSaveNFT'
    });
  const v546 = ['adminSaveNFT0_79', v538];
  
  const txn1 = await (ctc.sendrecv({
    args: [v486, v487, v488, v508, v509, v516, v517, v527, v528, v546],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:25:decimal', stdlib.UInt_max, '1'), v488]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
      
      switch (v635[0]) {
        case 'IERC721Receiver0_79': {
          const v638 = v635[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v748 = v635[1];
          sim_r.txns.push({
            kind: 'api',
            who: "adminSaveNFT"
            });
          ;
          const v795 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v797 = stdlib.Array_set(v527, '0', v795);
          const v798 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v797);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v488
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v508), null);
          const v820 = true;
          const v821 = await txn1.getOutput('adminSaveNFT', 'v820', ctc5, v820);
          
          const v1783 = v508;
          const v1784 = v509;
          const v1786 = v798;
          const v1787 = v517;
          const v1788 = v798[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1789 = v1788[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_79': {
          const v858 = v635[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v968 = v635[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
  switch (v635[0]) {
    case 'IERC721Receiver0_79': {
      const v638 = v635[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v748 = v635[1];
      undefined /* setApiDetails */;
      ;
      const v795 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v797 = stdlib.Array_set(v527, '0', v795);
      const v798 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v797);
      ;
      const v816 = stdlib.addressEq(v634, v486);
      stdlib.assert(v816, {
        at: './index.rsh:92:24:application',
        fs: ['at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
        msg: 'Only Backend can save NFT',
        who: 'adminSaveNFT'
        });
      const v817 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
      const v818 = stdlib.fromSome(v817, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
      const v819 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:93:56:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v819, {
        at: './index.rsh:93:24:application',
        fs: ['at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
        msg: 'one NFT already locked by this bridger',
        who: 'adminSaveNFT'
        });
      const v820 = true;
      const v821 = await txn1.getOutput('adminSaveNFT', 'v820', ctc5, v820);
      if (v316) {
        stdlib.protect(ctc0, await interact.out(v748, v821), {
          at: './index.rsh:82:13:application',
          fs: ['at ./index.rsh:82:13:application call to [unknown function] (defined at: ./index.rsh:82:13:function exp)', 'at ./index.rsh:95:20:application call to "res" (defined at: ./index.rsh:91:13:function exp)', 'at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
          msg: 'out',
          who: 'adminSaveNFT'
          });
        }
      else {
        }
      
      const v1783 = v508;
      const v1784 = v509;
      const v1786 = v798;
      const v1787 = v517;
      const v1788 = v798[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1789 = v1788[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_79': {
      const v858 = v635[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v968 = v635[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v558 = ctc.selfAddress();
  const v560 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v562 = stdlib.addressEq(v558, v487);
  stdlib.assert(v562, {
    at: './index.rsh:126:23:application',
    fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:17:function exp)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  const v565 = stdlib.gt(v528, stdlib.checkedBigNumberify('./index.rsh:127:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v565, {
    at: './index.rsh:127:23:application',
    fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:17:function exp)', 'at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v568 = ['claimNFT0_79', v560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v486, v487, v488, v508, v509, v516, v517, v527, v528, v568],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '0'), v488]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
      
      switch (v635[0]) {
        case 'IERC721Receiver0_79': {
          const v638 = v635[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v748 = v635[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v858 = v635[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v907 = stdlib.Array_set(v527, '0', v528);
          const v908 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v907);
          ;
          const v939 = v908[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
          const v940 = v939[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
          const v947 = stdlib.safeSub(v940, stdlib.checkedBigNumberify('./index.rsh:136:26:decimal', stdlib.UInt_max, '1'));
          const v949 = stdlib.Array_set(v939, '0', v947);
          const v950 = stdlib.Array_set(v908, stdlib.checkedBigNumberify('./index.rsh:136:36:application', stdlib.UInt_max, '0'), v949);
          sim_r.txns.push({
            kind: 'from',
            to: v634,
            tok: v488
            });
          await stdlib.simMapSet(sim_r, 0, v634, stdlib.checkedBigNumberify('./index.rsh:138:31:decimal', stdlib.UInt_max, '0'));
          const v951 = true;
          const v952 = await txn1.getOutput('claimNFT', 'v951', ctc5, v951);
          
          const v1828 = v508;
          const v1829 = false;
          const v1831 = v950;
          const v1832 = v517;
          const v1833 = v950[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1834 = v1833[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_79': {
          const v968 = v635[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
  switch (v635[0]) {
    case 'IERC721Receiver0_79': {
      const v638 = v635[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v748 = v635[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v858 = v635[1];
      undefined /* setApiDetails */;
      ;
      const v907 = stdlib.Array_set(v527, '0', v528);
      const v908 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v907);
      ;
      const v938 = stdlib.addressEq(v634, v487);
      stdlib.assert(v938, {
        at: './index.rsh:133:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      const v939 = v908[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
      const v940 = v939[stdlib.checkedBigNumberify('./index.rsh:134:32:application', stdlib.UInt_max, '0')];
      const v941 = stdlib.gt(v940, stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v941, {
        at: './index.rsh:134:24:application',
        fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v947 = stdlib.safeSub(v940, stdlib.checkedBigNumberify('./index.rsh:136:26:decimal', stdlib.UInt_max, '1'));
      const v949 = stdlib.Array_set(v939, '0', v947);
      const v950 = stdlib.Array_set(v908, stdlib.checkedBigNumberify('./index.rsh:136:36:application', stdlib.UInt_max, '0'), v949);
      ;
      await stdlib.mapSet(map0, v634, stdlib.checkedBigNumberify('./index.rsh:138:31:decimal', stdlib.UInt_max, '0'));
      const v951 = true;
      const v952 = await txn1.getOutput('claimNFT', 'v951', ctc5, v951);
      if (v316) {
        stdlib.protect(ctc0, await interact.out(v858, v952), {
          at: './index.rsh:123:13:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:141:20:application call to "res" (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1828 = v508;
      const v1829 = false;
      const v1831 = v950;
      const v1832 = v517;
      const v1833 = v950[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1834 = v1833[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_79': {
      const v968 = v635[1];
      return;
      break;
      }
    }
  
  
  };
export async function _lockNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _lockNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _lockNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v486, v487, v488, v508, v509, v516, v517, v527, v528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v548 = ctc.selfAddress();
  const v550 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v552 = stdlib.addressEq(v548, v487);
  stdlib.assert(v552, {
    at: './index.rsh:103:23:application',
    fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)', 'at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v553 = v509 ? false : true;
  stdlib.assert(v553, {
    at: './index.rsh:104:31:application',
    fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)', 'at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:68:57:application call to [unknown function] (defined at: ./index.rsh:68:57:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v556 = ['lockNFT0_79', v550];
  
  const txn1 = await (ctc.sendrecv({
    args: [v486, v487, v488, v508, v509, v516, v517, v527, v528, v556],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:107:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:107:25:decimal', stdlib.UInt_max, '1'), v488]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
      
      switch (v635[0]) {
        case 'IERC721Receiver0_79': {
          const v638 = v635[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v748 = v635[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v858 = v635[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v968 = v635[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1015 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1017 = stdlib.Array_set(v527, '0', v1015);
          const v1018 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v1017);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v488
            });
          await stdlib.simMapSet(sim_r, 0, v634, stdlib.checkedBigNumberify('./index.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1071 = true;
          const v1072 = await txn1.getOutput('lockNFT', 'v1071', ctc5, v1071);
          
          const v1873 = v508;
          const v1874 = true;
          const v1876 = v1018;
          const v1877 = v517;
          const v1878 = v1018[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1879 = v1878[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v635], secs: v637, time: v636, didSend: v316, from: v634 } = txn1;
  switch (v635[0]) {
    case 'IERC721Receiver0_79': {
      const v638 = v635[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v748 = v635[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v858 = v635[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v968 = v635[1];
      undefined /* setApiDetails */;
      ;
      const v1015 = stdlib.safeAdd(v528, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1017 = stdlib.Array_set(v527, '0', v1015);
      const v1018 = stdlib.Array_set(v516, stdlib.checkedBigNumberify('./index.rsh:68:57:dot', stdlib.UInt_max, '0'), v1017);
      ;
      const v1069 = stdlib.addressEq(v634, v487);
      stdlib.assert(v1069, {
        at: './index.rsh:110:24:application',
        fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1070 = v509 ? false : true;
      stdlib.assert(v1070, {
        at: './index.rsh:111:32:application',
        fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v634, stdlib.checkedBigNumberify('./index.rsh:113:39:decimal', stdlib.UInt_max, '1'));
      const v1071 = true;
      const v1072 = await txn1.getOutput('lockNFT', 'v1071', ctc5, v1071);
      if (v316) {
        stdlib.protect(ctc0, await interact.out(v968, v1072), {
          at: './index.rsh:100:13:application',
          fs: ['at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)', 'at ./index.rsh:116:20:application call to "res" (defined at: ./index.rsh:109:13:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1873 = v508;
      const v1874 = true;
      const v1876 = v1018;
      const v1877 = v517;
      const v1878 = v1018[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1879 = v1878[stdlib.checkedBigNumberify('./index.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function IERC721Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _IERC721Receiver4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function adminSaveNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _adminSaveNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function lockNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _lockNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `claimNFT()byte`, `lockNFT()byte`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `balance_NFT_v()uint64`, `balance_v()uint64`, `claimNFT()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`]
    },
  appApproval: `BiAUAAEEA0xACAnu9d6pCp6inrQMku7r5wzp68/4D9nQhKMLyNbelwa5wM37B6349ZUIpomv1wL///////////8BeqCNBiYDAQABAQAiNQAxGEEFLipkSSJbNQEhBls1AjEZIxJBAAoxACghB69mQgT6NhoAF0lBATsiNQQjNQZJIQgMQACXSSEJDEAAVUkhCgxAADVJIQsMQAASIQsSRCo1/yk0/1AhBK9QQgF6IQoSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBXiEJEkQ0ASQSRChkKWRQSTUDVwAgNQdCBJhJIQwMQAAgIQwSRDQBJBJEIjYaAYgEpkk1/yNbNP8iVU0WNQdCBHEhCBJEKjX/gAEDNP9QIQSvUEIBCkkhDQxAAFRJIQ4MQAA0SSEPDEAAFCEPEkQqNf+AAQI0/1AhBK9QQgDhIQ4SRDQBJBJEKGQpZFBJNQNXSCA1B0IEGyENEkQ0ASQSRChkKWRQSTUDV5MINQdCBAJJIRAMQAAZIRASRDQBJBJEKGQpZFBJNQNXegg1B0ID4oH98IU9EkQ0ASQSRChkKWRQSTUDV2gBNQdCA8Y2GgIXNQQ2GgM2GgEXSSUMQAIoSSQMQABZJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABJEnNPOwMgYhEQ9ENP8xABJENP80A1cgIDQDIQVbNANXSCA0A1doARcyBjQDV2kRNAMhEltCArZIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgIDX+IQVbNf1XSCA1/FdoARc1+1dpETX6IRJbNflXghE1+IGTAVs190k1BTX2gARfpNvYNPZQsDIGIREMRDT2IlVJgQIMQADPSSUMQABRJRJEIzT9iAMkMQA0/hJENPsURDEAKIAJAQAAAAAAAAABZoAJAAAAAAAABC8BsCk1BzT/NP40/TT8IzIGNPg09yMIFjX1VwgJNPVMUDT5QgHySDT4NPcWNfRXCAk09ExQNfUxADT+EkQ09VcAEUk19CJbSTXzIg1EsSKyASOyEiSyEDEAshQ0/bIRszEAKIAJAQAAAAAAAAAAZoAJAAAAAAAAA7cBsCk1BzT/NP40/TT8IjIGNPQ08yMJFjXyVwgJNPJMUDT5QgF6SSMMQABQSCM0/YgCVzEANP8SRCI0/IgCJEk19SNbNPUiVU0iEkSACQAAAAAAAAM0AbApNQc0/zT+NP00/DT7MgY0+DT3IwgWNfVXCAk09UxQNPlCASRIgAwAAAAAAAACtnRydWWwgAR0cnVlNQc0/zT+NP00/DT7MgY0+DT3FjX1VwgJNPVMUDT5QgDtSSMMQABoIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+IQVbNf1XSBE1/IAEmouRdLA0/FcAETX7JTT9iAGPNP8xABJENP80/jT9NP4iMgY0+0kiWyUIFjX6VwgJNPpMUCJCAH9IIROIAUsiNAESRDQESSISTDQCEhFESTUFSVcAIDX/gSBbNf6ABNnpsco0/1A0/hZQsIERr0k1/VcAESEGrzX7VwgJNPtMUDX8IROIAQOxIrIBIrISJLIQMgqyFDT+shGzMQA0/1A0/hZQNPxQKEsBVwBZZ0gjNQEyBjUCQgByNf81/jX9Nfw1+zX6Nfk1+DT+VwARSTX3Ils19jT4NPlQNPoWUDT7UDT8FlEHCFA0/lA0/xZQNPdQNPYWUChLAVcAf2cpSwFXfxxnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 155,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v487",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v488",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v487",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v488",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T14",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_IERC721Receiver0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v635",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1071",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v694",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v820",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v951",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bridger_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Creator_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T14",
        "name": "_a3",
        "type": "tuple"
      }
    ],
    "name": "IERC721Receiver",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T14",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T14",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_IERC721Receiver0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v635",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adminSaveNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_NFT_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockedNFT_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1887",
        "type": "address"
      }
    ],
    "name": "saved_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002f7538038062002f758339810160408190526200002691620003ef565b60008055436003556200003862000236565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528051825160608101845285815282515185015194810194909452905151820151151591830191909152620000f192909162000189565b6040820152620001043415600d6200020c565b6200010e6200027d565b33815260208084018051516001600160a01b0390811683850152905182015116604080840191909152838101516060840152600160008190554390555162000159918391016200047a565b604051602081830303815290604052600290805190602001906200017f929190620002a8565b505050506200055c565b6200019362000337565b60005b6001811015620001e957848160018110620001b557620001b562000464565b6020020151828260018110620001cf57620001cf62000464565b602002015280620001e081620004f5565b91505062000196565b508181846001811062000200576200020062000464565b60200201529392505050565b81620002325760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200026962000337565b81526020016200027862000337565b905290565b6040805160808101825260008082526020820181905291810191909152606081016200027862000337565b828054620002b6906200051f565b90600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000384565b5090565b60405180602001604052806001905b6200036d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003465790505090565b5b8082111562000333576000815560010162000385565b604080519081016001600160401b0381118282101715620003cc57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620003ea57600080fd5b919050565b600081830360608112156200040357600080fd5b6200040d6200039b565b835181526040601f19830112156200042457600080fd5b6200042e6200039b565b91506200043e60208501620003d2565b82526200044e60408501620003d2565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620004e95782518051835285810151868401528401511515848301529184019190850190600101620004b7565b50505050505092915050565b60006000198214156200051857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200053457607f821691505b602082108114156200055657634e487b7160e01b600052602260045260246000fd5b50919050565b612a09806200056c6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063ab53f2c611610061578063ab53f2c61461024c578063bee266091461026f578063d2b339bd14610277578063d76a47691461028c578063e43ffb9f146102a157005b80638323075714610209578063989653651461021e578063a1c6864014610231578063a7661d541461023957005b80633bc5b7bf116100c85780633bc5b7bf14610183578063672756ad146101b057806369e13bd7146101c8578063819938fc146101f457005b80631e93b0f1146100ff5780632c10a159146101235780633894aea5146101365780633a3dbe721461016357005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd61013136600461214d565b6102b6565b34801561014257600080fd5b5061014b6102da565b6040516001600160a01b03909116815260200161011a565b34801561016f57600080fd5b5061011061017e36600461217d565b6102ec565b34801561018f57600080fd5b506101a361019e36600461217d565b610316565b60405161011a91906121b0565b6101b8610342565b604051901515815260200161011a565b6101db6101d636600461230e565b610372565b60405190516001600160e01b031916815260200161011a565b34801561020057600080fd5b5061014b6103e9565b34801561021557600080fd5b50600154610110565b6100fd61022c366004612360565b6103f5565b6101b8610415565b6100fd61024736600461214d565b610445565b34801561025857600080fd5b50610261610465565b60405161011a92919061239f565b6101b8610502565b34801561028357600080fd5b50610110610532565b34801561029857600080fd5b506101b861053e565b3480156102ad57600080fd5b5061011061054a565b6102be611eb1565b6102d66102d0368490038401846123f2565b82610556565b5050565b6000806102e6816107a0565b91505090565b60408051602081019091526001600160a01b038216815260009061030f81610921565b9392505050565b604080516060810182526000808252602082018190529181019190915261033c82610ad8565b92915050565b600061034c611ee3565b6020810151516002905261035e611eb1565b6103688282610baa565b6040015192915050565b604080516020810190915260008152610389611ee3565b6020818101805151600090528051518201516001600160a01b0389811690915281515183015190881690830152805151820151604001869052515101516060018390526103d4611eb1565b6103de8282610baa565b519695505050505050565b6000806102e6816112e6565b6103fd611eb1565b6102d661040f36849003840184612448565b82610baa565b600061041f611ee3565b60208101515160019052610431611eb1565b61043b8282610baa565b6020015192915050565b61044d611eb1565b6102d661045f368490038401846123f2565b82611465565b60006060600054600280805461047a90612543565b80601f01602080910402602001604051908101604052809291908181526020018280546104a690612543565b80156104f35780601f106104c8576101008083540402835291602001916104f3565b820191906000526020600020905b8154815290600101906020018083116104d657829003601f168201915b50505050509050915091509091565b600061050c611ee3565b6020810151516003905261051e611eb1565b6105288282610baa565b6060015192915050565b6000806102e68161162f565b6000806102e6816117af565b6000806102e68161192e565b6105666001600054146011611aa9565b815161058190158061057a57508251600154145b6012611aa9565b60008080556002805461059390612543565b80601f01602080910402602001604051908101604052809291908181526020018280546105bf90612543565b801561060c5780601f106105e15761010080835404028352916020019161060c565b820191906000526020600020905b8154815290600101906020018083116105ef57829003601f168201915b5050505050806020019051810190610624919061264f565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161067b3415600e611aa9565b61069561068e3383604001516003611acf565b600f611aa9565b80516106ad906001600160a01b031633146010611aa9565b6106b5611f02565b815181516001600160a01b03918216905260208084018051845190841690830152604080860151855190851690820152905182850180519190941690528251600092018290529151439083015260608085018051845192830190945251515161077b939291908190610728906003611ae5565b81526020018660600151600060018110610744576107446126b5565b60200201516020015181526020018660600151600060018110610769576107696126b5565b60200201516040015115159052611b32565b6020820180516060019190915251600060809091015261079a81611ba6565b50505050565b60006001600054141561085d576000600280546107bc90612543565b80601f01602080910402602001604051908101604052809291908181526020018280546107e890612543565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b505050505080602001905181019061084d919061264f565b905061085b60006008611aa9565b505b600460005414156109105760006002805461087790612543565b80601f01602080910402602001604051908101604052809291908181526020018280546108a390612543565b80156108f05780601f106108c5576101008083540402835291602001916108f0565b820191906000526020600020905b8154815290600101906020018083116108d357829003601f168201915b505050505080602001905181019061090891906126cb565b519392505050565b61091c60006008611aa9565b919050565b6000600160005414156109de5760006002805461093d90612543565b80601f016020809104026020016040519081016040528092919081815260200182805461096990612543565b80156109b65780601f1061098b576101008083540402835291602001916109b6565b820191906000526020600020905b81548152906001019060200180831161099957829003601f168201915b50505050508060200190518101906109ce919061264f565b90506109dc6000600c611aa9565b505b60046000541415610acc576000600280546109f890612543565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2490612543565b8015610a715780601f10610a4657610100808354040283529160200191610a71565b820191906000526020600020905b815481529060010190602001808311610a5457829003601f168201915b5050505050806020019051810190610a8991906126cb565b905060018351610a9890610ad8565b516001811115610aaa57610aaa61219a565b14610ab657600061030f565b8251610ac190610ad8565b604001519392505050565b61091c6000600c611aa9565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b2457610b2461219a565b1415610b9b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b6557610b6561219a565b6001811115610b7657610b7661219a565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610bba6004600054146021611aa9565b8151610bd5901580610bce57508251600154145b6022611aa9565b600080805560028054610be790612543565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1390612543565b8015610c605780601f10610c3557610100808354040283529160200191610c60565b820191906000526020600020905b815481529060010190602001808311610c4357829003601f168201915b5050505050806020019051810190610c7891906126cb565b9050610c82611f32565b610c9160001943106023611aa9565b7f609ab9b7bf2f477776b524871c686a3b0fb6d65c5630321136fc4f3e833761463385604051610cc292919061277b565b60405180910390a16000602085015151516003811115610ce457610ce461219a565b1415610e1f57610cf634156013611aa9565b610d10610d093384604001516000611acf565b6014611aa9565b8051637472756560e01b9052805160405190516001600160e01b03191681527f8283be77a9cd0f8f327fbe0ea396fe4f73a2843e24b2aa320291bba76379050a9060200160405180910390a180518352610d68611f02565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451901515908401529251439082015260a086015181519384018252610100870151845260e087018051840151938501939093529151810151151590830152610df891600090611b32565b6020820180516060019190915260c0840151905160800152610e1981611ba6565b5061079a565b6001602085015151516003811115610e3957610e3961219a565b1415610fb157610e4b34156015611aa9565b610e65610e5e3384604001516001611acf565b6016611aa9565b8151610e7d906001600160a01b031633146017611aa9565b610ec960006001610e918560600151610ad8565b516001811115610ea357610ea361219a565b14610eaf576000610ec1565b610ebc8460600151610ad8565b604001515b146018611aa9565b604051600181527fdae82dc1b0c13711e7f1432401ff54b121302c06336476efb34f40722546a7cd9060200160405180910390a160016020840152610f0c611f02565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519015159301929092529151439083015260a08501518251918201909252610100850151610df892916000918190610f8b906001611ae5565b81526020018760e001516020015181526020018760e00151604001511515815250611b32565b6002602085015151516003811115610fcb57610fcb61219a565b141561118257610fdd34156019611aa9565b61101e8260a001516000604051806060016040528086610100015181526020018660e001516020015181526020018660e00151604001511515815250611b32565b81602001819052506110406110393384604001516000611acf565b601a611aa9565b61106382602001516001600160a01b0316336001600160a01b031614601b611aa9565b60208101515151611077901515601c611aa9565b6110878260400151336001611c68565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f71b25430a475d5462bba4f95517f75efc371c925ca452b596a91b7ccfabcbf9a910160405180910390a1600160408401526110eb611f02565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052835160009084018190529351439083015291850180518251938401909252515151610df8939192908190611160906001611c7c565b8152602087810180515182015191830191909152516040909101906000610769565b600360208501515151600381111561119c5761119c61219a565b141561079a576111ae3415601d611aa9565b6111c86111c13384604001516001611acf565b601e611aa9565b6111eb82602001516001600160a01b0316336001600160a01b031614601f611aa9565b61120882608001516111fe576001611201565b60005b6020611aa9565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f30e41ad88d1079e0b59d976d9a8919b8549253763d18e30143e70aa9d0d26075910160405180910390a16001606084015261126d611f02565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600193018390529251439082015260a08601518151938401909152610100860151610df8939192600092918291610f8b9190611ae5565b6000600160005414156113a35760006002805461130290612543565b80601f016020809104026020016040519081016040528092919081815260200182805461132e90612543565b801561137b5780601f106113505761010080835404028352916020019161137b565b820191906000526020600020905b81548152906001019060200180831161135e57829003601f168201915b5050505050806020019051810190611393919061264f565b90506113a160006007611aa9565b505b60046000541415611459576000600280546113bd90612543565b80601f01602080910402602001604051908101604052809291908181526020018280546113e990612543565b80156114365780601f1061140b57610100808354040283529160200191611436565b820191906000526020600020905b81548152906001019060200180831161141957829003601f168201915b505050505080602001905181019061144e91906126cb565b606001519392505050565b61091c60006007611aa9565b6114756004600054146026611aa9565b815161149090158061148957508251600154145b6027611aa9565b6000808055600280546114a290612543565b80601f01602080910402602001604051908101604052809291908181526020018280546114ce90612543565b801561151b5780601f106114f05761010080835404028352916020019161151b565b820191906000526020600020905b8154815290600101906020018083116114fe57829003601f168201915b505050505080602001905181019061153391906126cb565b90506115456000194310156028611aa9565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161159834156024611aa9565b80516115b0906001600160a01b031633146025611aa9565b6115b8611f02565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935283514392019190915260a085015183519091015260c08401519151015261079a81611ba6565b6000600160005414156116ec5760006002805461164b90612543565b80601f016020809104026020016040519081016040528092919081815260200182805461167790612543565b80156116c45780601f10611699576101008083540402835291602001916116c4565b820191906000526020600020905b8154815290600101906020018083116116a757829003601f168201915b50505050508060200190518101906116dc919061264f565b90506116ea60006009611aa9565b505b600460005414156117a35760006002805461170690612543565b80601f016020809104026020016040519081016040528092919081815260200182805461173290612543565b801561177f5780601f106117545761010080835404028352916020019161177f565b820191906000526020600020905b81548152906001019060200180831161176257829003601f168201915b505050505080602001905181019061179791906126cb565b61010001519392505050565b61091c60006009611aa9565b60006001600054141561186c576000600280546117cb90612543565b80601f01602080910402602001604051908101604052809291908181526020018280546117f790612543565b80156118445780601f1061181957610100808354040283529160200191611844565b820191906000526020600020905b81548152906001019060200180831161182757829003601f168201915b505050505080602001905181019061185c919061264f565b905061186a6000600b611aa9565b505b600460005414156119225760006002805461188690612543565b80601f01602080910402602001604051908101604052809291908181526020018280546118b290612543565b80156118ff5780601f106118d4576101008083540402835291602001916118ff565b820191906000526020600020905b8154815290600101906020018083116118e257829003601f168201915b505050505080602001905181019061191791906126cb565b608001519392505050565b61091c6000600b611aa9565b6000600160005414156119eb5760006002805461194a90612543565b80601f016020809104026020016040519081016040528092919081815260200182805461197690612543565b80156119c35780601f10611998576101008083540402835291602001916119c3565b820191906000526020600020905b8154815290600101906020018083116119a657829003601f168201915b50505050508060200190518101906119db919061264f565b90506119e96000600a611aa9565b505b60046000541415611aa157600060028054611a0590612543565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3190612543565b8015611a7e5780601f10611a5357610100808354040283529160200191611a7e565b820191906000526020600020905b815481529060010190602001808311611a6157829003601f168201915b5050505050806020019051810190611a9691906126cb565b60c001519392505050565b61091c6000600a5b816102d65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611add83853085611ccb565b949350505050565b600082611af28382612840565b915081101561033c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611ac6565b611b3a611f4f565b60005b6001811015611b8657848160018110611b5857611b586126b5565b6020020151828260018110611b6f57611b6f6126b5565b602002015280611b7e81612858565b915050611b3d565b5081818460018110611b9a57611b9a6126b5565b60200201529392505050565b611bae611f9a565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301511515608080870191909152845182015160a08701528451015160c086015283518101515160e086015292519092015151516101008401526004600055436001559051611c3f918391016128b7565b60405160208183030381529060405260029080519060200190611c63929190612011565b505050565b611c73838383611da5565b611c6357600080fd5b600082611c898382612983565b915081111561033c5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611ac6565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611d329161299a565b60006040518083038185875af1925050503d8060008114611d6f576040519150601f19603f3d011682016040523d82523d6000602084013e611d74565b606091505b5091509150611d8582826001611e76565b5080806020019051810190611d9a91906129b6565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e049161299a565b60006040518083038185875af1925050503d8060008114611e41576040519150601f19603f3d011682016040523d82523d6000602084013e611e46565b606091505b5091509150611e5782826002611e76565b5080806020019051810190611e6c91906129b6565b9695505050505050565b60608315611e8557508161030f565b825115611e955782518084602001fd5b60405163100960cb60e01b815260048101839052602401611ac6565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b604051806040016040528060008152602001611efd612095565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611efd6120a8565b60408051606081018252600091810191825290815260208101611efd5b60405180602001604052806001905b611f84604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611f5e5790505090565b604080516101208101825260008082526020820181905291810182905260608101829052608081019190915260a08101611fd2611f4f565b815260200160008152602001612004604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805461201d90612543565b90600052602060002090601f01602090048101928261203f5760008555612085565b82601f1061205857805160ff1916838001178555612085565b82800160010185558215612085579182015b8281111561208557825182559160200191906001019061206a565b506120919291506120db565b5090565b6040518060200160405280611efd6120f0565b6040518060a0016040528060006001600160a01b0316815260200160001515815260200160008152602001612004611f4f565b5b8082111561209157600081556001016120dc565b6040805160a081019091528060008152602001611ec8604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611efd60408051602081019091526000815290565b60006040828403121561215f57600080fd5b50919050565b6001600160a01b038116811461217a57600080fd5b50565b60006020828403121561218f57600080fd5b813561030f81612165565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106121c7576121c761219a565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612220576122206121e7565b60405290565b6040516020810167ffffffffffffffff81118282101715612220576122206121e7565b60405160a0810167ffffffffffffffff81118282101715612220576122206121e7565b6040516080810167ffffffffffffffff81118282101715612220576122206121e7565b604051610120810167ffffffffffffffff81118282101715612220576122206121e7565b6000602082840312156122c557600080fd5b6040516020810181811067ffffffffffffffff821117156122e8576122e86121e7565b60405290508082356001600160e01b03198116811461230657600080fd5b905292915050565b6000806000806080858703121561232457600080fd5b843561232f81612165565b9350602085013561233f81612165565b92506040850135915061235586606087016122b3565b905092959194509250565b6000610120828403121561215f57600080fd5b60005b8381101561238e578181015183820152602001612376565b8381111561079a5750506000910152565b82815260406020820152600082518060408401526123c4816060850160208701612373565b601f01601f1916919091016060019392505050565b801515811461217a57600080fd5b803561091c816123d9565b60006040828403121561240457600080fd5b6040516040810181811067ffffffffffffffff82111715612427576124276121e7565b60405282358152602083013561243c816123d9565b60208201529392505050565b600081830361012081121561245c57600080fd5b6124646121fd565b8335815261010080601f198401121561247c57600080fd5b612484612226565b61248c612249565b60208701356004811061249e57600080fd5b81526080603f19860112156124b257600080fd5b6124ba61226c565b945060408701356124ca81612165565b855260608701356124da81612165565b6020860152608087013560408601526124f68860a089016122b3565b606086015284602082015261250d60c088016123e7565b604082015261251e60e088016123e7565b606082015261252e8388016123e7565b60808201528152602083015250949350505050565b600181811c9082168061255757607f821691505b6020821081141561215f57634e487b7160e01b600052602260045260246000fd5b805161091c81612165565b805161091c816123d9565b6000606082840312156125a057600080fd5b6040516060810181811067ffffffffffffffff821117156125c3576125c36121e7565b8060405250809150825181526020830151602082015260408301516125e7816123d9565b6040919091015292915050565b600082601f83011261260557600080fd5b61260d612226565b8060608085018681111561262057600080fd5b855b8181101561264357612634888261258e565b85526020909401938201612622565b50919695505050505050565b600060c0828403121561266157600080fd5b61266961226c565b825161267481612165565b8152602083015161268481612165565b6020820152604083015161269781612165565b60408201526126a984606085016125f4565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b60006101a082840312156126de57600080fd5b6126e661228f565b6126ef83612578565b81526126fd60208401612578565b602082015261270e60408401612578565b604082015261271f60608401612578565b606082015261273060808401612583565b60808201526127428460a085016125f4565b60a08201526101008084015160c083015261276185610120860161258e565b60e083015261018084015181830152508091505092915050565b6001600160a01b03838116825282516020808401919091528301515180516101408401929190600481106127b1576127b161219a565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c0860152506040810151915061280660e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156128535761285361282a565b500190565b600060001982141561286c5761286c61282a565b5060010190565b8060005b600181101561079a576128a184835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612877565b81516001600160a01b031681526020808301516101a08301916128e4908401826001600160a01b03169052565b5060408301516128ff60408401826001600160a01b03169052565b50606083015161291a60608401826001600160a01b03169052565b50608083015161292e608084018215159052565b5060a083015161294160a0840182612873565b5060c08301516101008381019190915260e084015180516101208501526020810151610140850152604001511515610160840152909201516101809091015290565b6000828210156129955761299561282a565b500390565b600082516129ac818460208701612373565b9190910192915050565b6000602082840312156129c857600080fd5b815161030f816123d956fea26469706673582212203fefd78d9f1dd730a063f4b043b8a129844bdc1c7c25c4ec18c205347886b25964736f6c634300080c0033`,
  BytecodeLen: 12149,
  Which: `oD`,
  version: 7,
  views: {
    Bridger_v: `Bridger_v`,
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    lockedNFT_v: `lockedNFT_v`,
    saved_v: `saved_v`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:161:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:68:57:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "IERC721Receiver": IERC721Receiver,
  "adminSaveNFT": adminSaveNFT,
  "claimNFT": claimNFT,
  "lockNFT": lockNFT
  };
export const _APIs = {
  IERC721Receiver: IERC721Receiver,
  adminSaveNFT: adminSaveNFT,
  claimNFT: claimNFT,
  lockNFT: lockNFT
  };
