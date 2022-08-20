// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = "0.1.11";
export const _versionHash = "0.1.11 (27cb9643)";
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc5 = stdlib.T_Array(
    ctc4,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3,
  });
  const map0_ctc = ctc7;

  const _Bridger_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v475;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _Creator_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v463;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _balance_NFT_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v492;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _balance_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v481;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _bridgingComplete_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v476;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _lockedNFT_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async () => {
        return v477;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _saved_v = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] = svs;
      return await (async (_v493) => {
        const v493 = stdlib.protect(ctc0, _v493, null);

        const v494 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, v493),
          null
        );
        const v495 = stdlib.fromSome(
          v494,
          stdlib.checkedBigNumberify(
            "./index.rsh:55:45:decimal",
            stdlib.UInt_max,
            "0"
          )
        );

        return v495;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  return {
    infos: {
      Bridger_v: {
        decode: _Bridger_v,
        ty: ctc0,
      },
      Creator_v: {
        decode: _Creator_v,
        ty: ctc0,
      },
      balance_NFT_v: {
        decode: _balance_NFT_v,
        ty: ctc3,
      },
      balance_v: {
        decode: _balance_v,
        ty: ctc3,
      },
      bridgingComplete_v: {
        decode: _bridgingComplete_v,
        ty: ctc2,
      },
      lockedNFT_v: {
        decode: _lockedNFT_v,
        ty: ctc2,
      },
      saved_v: {
        decode: _saved_v,
        ty: ctc3,
      },
    },
    views: {
      3: [ctc0, ctc0, ctc1, ctc0, ctc2, ctc2, ctc5, ctc3, ctc4, ctc3],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3,
  };
}
export async function Creator(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Creator expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Creator expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Bridger: ctc3,
    NFT: ctc4,
  });
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")
  );
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    IERC721Receiver0_73: ctc7,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8,
  });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(
    ctc11,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  });

  const v450 = [
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    false,
  ];
  const v451 = [v450];
  const v457 = "I have deployed";
  const v458 = stdlib.protect(ctc5, await interact.getParams(v457), {
    at: "./index.rsh:40:66:application",
    fs: [
      "at ./index.rsh:39:21:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)",
    ],
    msg: "getParams",
    who: "Creator",
  });
  const v459 = v458.Bridger;
  const v460 = v458.NFT;

  const txn1 = await ctc.sendrecv({
    args: [v459, v460],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:44:17:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:44:17:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v464, v465],
        secs: v467,
        time: v466,
        didSend: v33,
        from: v463,
      } = txn1;

      const v468 =
        v451[
          stdlib.checkedBigNumberify(
            "./index.rsh:44:17:dot",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v469 = stdlib.Array_set(
        v468,
        "0",
        stdlib.checkedBigNumberify(
          "./index.rsh:44:17:dot",
          stdlib.UInt_max,
          "0"
        )
      );
      const v470 = stdlib.Array_set(
        v451,
        stdlib.checkedBigNumberify(
          "./index.rsh:44:17:dot",
          stdlib.UInt_max,
          "0"
        ),
        v469
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
        kind: "init",
        tok: v465,
      });
      const v475 = v464;
      const v476 = false;
      const v477 = false;
      const v478 = v466;
      const v480 = v470;
      const v481 = stdlib.checkedBigNumberify(
        "./index.rsh:37:15:after expr stmt semicolon",
        stdlib.UInt_max,
        "0"
      );

      if (
        await (async () => {
          return true;
        })()
      ) {
        const v491 =
          v480[
            stdlib.checkedBigNumberify(
              "./index.rsh:76:44:application",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v492 =
          v491[
            stdlib.checkedBigNumberify(
              "./index.rsh:76:44:application",
              stdlib.UInt_max,
              "0"
            )
          ];
        sim_r.isHalt = false;
      } else {
        sim_r.txns.push({
          kind: "halt",
          tok: v465,
        });
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4],
    waitIfNotPresent: false,
  });
  const {
    data: [v464, v465],
    secs: v467,
    time: v466,
    didSend: v33,
    from: v463,
  } = txn1;
  const v468 =
    v451[
      stdlib.checkedBigNumberify("./index.rsh:44:17:dot", stdlib.UInt_max, "0")
    ];
  const v469 = stdlib.Array_set(
    v468,
    "0",
    stdlib.checkedBigNumberify("./index.rsh:44:17:dot", stdlib.UInt_max, "0")
  );
  const v470 = stdlib.Array_set(
    v451,
    stdlib.checkedBigNumberify("./index.rsh:44:17:dot", stdlib.UInt_max, "0"),
    v469
  );
  const v473 = "I HAVE DEPLOYED";
  stdlib.protect(ctc0, await interact.iDeployed(v473), {
    at: "./index.rsh:46:35:application",
    fs: [
      "at ./index.rsh:46:35:application call to [unknown function] (defined at: ./index.rsh:46:35:function exp)",
      'at ./index.rsh:46:35:application call to "liftedInteract" (defined at: ./index.rsh:46:35:application)',
    ],
    msg: "iDeployed",
    who: "Creator",
  });

  let v475 = v464;
  let v476 = false;
  let v477 = false;
  let v478 = v466;
  let v480 = v470;
  let v481 = stdlib.checkedBigNumberify(
    "./index.rsh:37:15:after expr stmt semicolon",
    stdlib.UInt_max,
    "0"
  );

  while (
    await (async () => {
      return true;
    })()
  ) {
    const v491 =
      v480[
        stdlib.checkedBigNumberify(
          "./index.rsh:76:44:application",
          stdlib.UInt_max,
          "0"
        )
      ];
    const v492 =
      v491[
        stdlib.checkedBigNumberify(
          "./index.rsh:76:44:application",
          stdlib.UInt_max,
          "0"
        )
      ];
    const txn2 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: ["time", stdlib.UInt_max],
      waitIfNotPresent: false,
    });
    if (txn2.didTimeout) {
      const txn3 = await ctc.sendrecv({
        args: [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492],
        evt_cnt: 0,
        funcNum: 3,
        lct: v478,
        onlyIf: true,
        out_tys: [],
        pay: [
          stdlib.checkedBigNumberify(
            "./index.rsh:158:21:decimal",
            stdlib.UInt_max,
            "0"
          ),
          [],
        ],
        sim_p: async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => {
            sim_txn_ctr = sim_txn_ctr.sub(1);
            return sim_txn_ctr;
          };

          stdlib.simMapDupe(sim_r, 0, map0);

          const {
            data: [],
            secs: v1034,
            time: v1033,
            didSend: v379,
            from: v1032,
          } = txn3;

          const cv475 = v475;
          const cv476 = v476;
          const cv477 = v477;
          const cv478 = v1033;
          const cv480 = v480;
          const cv481 = v481;

          await (async () => {
            const v475 = cv475;
            const v476 = cv476;
            const v477 = cv477;
            const v478 = cv478;
            const v480 = cv480;
            const v481 = cv481;

            if (
              await (async () => {
                return true;
              })()
            ) {
              const v491 =
                v480[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:76:44:application",
                    stdlib.UInt_max,
                    "0"
                  )
                ];
              const v492 =
                v491[
                  stdlib.checkedBigNumberify(
                    "./index.rsh:76:44:application",
                    stdlib.UInt_max,
                    "0"
                  )
                ];
              sim_r.isHalt = false;
            } else {
              sim_r.txns.push({
                kind: "halt",
                tok: v465,
              });
              sim_r.txns.push({
                kind: "halt",
                tok: undefined /* Nothing */,
              });
              sim_r.isHalt = true;
            }
          })();
          return sim_r;
        },
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc4, ctc3, ctc10, ctc10, ctc12, ctc1, ctc11, ctc1],
        waitIfNotPresent: false,
      });
      const {
        data: [],
        secs: v1034,
        time: v1033,
        didSend: v379,
        from: v1032,
      } = txn3;
      const v1035 = stdlib.addressEq(v463, v1032);
      stdlib.assert(v1035, {
        at: "./index.rsh:158:21:dot",
        fs: [
          "at ./index.rsh:157:40:application call to [unknown function] (defined at: ./index.rsh:157:40:function exp)",
        ],
        msg: "sender correct",
        who: "Creator",
      });
      const cv475 = v475;
      const cv476 = v476;
      const cv477 = v477;
      const cv478 = v1033;
      const cv480 = v480;
      const cv481 = v481;

      v475 = cv475;
      v476 = cv476;
      v477 = cv477;
      v478 = cv478;
      v480 = cv480;
      v481 = cv481;

      continue;
    } else {
      const {
        data: [v597],
        secs: v599,
        time: v598,
        didSend: v304,
        from: v596,
      } = txn2;
      switch (v597[0]) {
        case "IERC721Receiver0_73": {
          const v600 = v597[1];
          undefined /* setApiDetails */;
          const v649 = stdlib.Array_set(v491, "0", v492);
          const v650 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v649
          );
          const v656 = "true";
          await txn2.getOutput("IERC721Receiver", "v656", ctc6, v656);
          const cv475 = v475;
          const cv476 = v476;
          const cv477 = v477;
          const cv478 = v598;
          const cv480 = v650;
          const cv481 = v481;

          v475 = cv475;
          v476 = cv476;
          v477 = cv477;
          v478 = cv478;
          v480 = cv480;
          v481 = cv481;

          continue;
          break;
        }
        case "claimNFT0_73": {
          const v708 = v597[1];
          undefined /* setApiDetails */;
          const v757 = stdlib.Array_set(v491, "0", v492);
          const v758 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v757
          );
          const v776 = stdlib.addressEq(v596, v464);
          stdlib.assert(v776, {
            at: "./index.rsh:132:24:application",
            fs: [
              "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
            ],
            msg: "Only Bridger can claim NFT when bridging",
            who: "Creator",
          });
          stdlib.assert(v477, {
            at: "./index.rsh:133:24:application",
            fs: [
              "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
            ],
            msg: "Bridger must have NFT to claim. None available",
            who: "Creator",
          });
          const v778 =
            v758[
              stdlib.checkedBigNumberify(
                "./index.rsh:134:32:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v779 =
            v778[
              stdlib.checkedBigNumberify(
                "./index.rsh:134:32:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v780 = stdlib.gt(
            v779,
            stdlib.checkedBigNumberify(
              "./index.rsh:134:40:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          stdlib.assert(v780, {
            at: "./index.rsh:134:24:application",
            fs: [
              "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
            ],
            msg: "Bridger must have NFT to claim. None available",
            who: "Creator",
          });
          const v786 = stdlib.safeSub(
            v779,
            stdlib.checkedBigNumberify(
              "./index.rsh:136:26:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v788 = stdlib.Array_set(v778, "0", v786);
          const v789 = stdlib.Array_set(
            v758,
            stdlib.checkedBigNumberify(
              "./index.rsh:136:36:application",
              stdlib.UInt_max,
              "0"
            ),
            v788
          );
          await stdlib.mapSet(
            map0,
            v596,
            stdlib.checkedBigNumberify(
              "./index.rsh:138:31:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v790 = true;
          await txn2.getOutput("claimNFT", "v790", ctc10, v790);
          const cv475 = v475;
          const cv476 = v476;
          const cv477 = false;
          const cv478 = v598;
          const cv480 = v789;
          const cv481 = v481;

          v475 = cv475;
          v476 = cv476;
          v477 = cv477;
          v478 = cv478;
          v480 = cv480;
          v481 = cv481;

          continue;
          break;
        }
        case "completeBridge0_73": {
          const v816 = v597[1];
          undefined /* setApiDetails */;
          const v865 = stdlib.Array_set(v491, "0", v492);
          const v866 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v865
          );
          const v906 = stdlib.addressEq(v596, v463);
          stdlib.assert(v906, {
            at: "./index.rsh:93:24:application",
            fs: [
              "at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)",
            ],
            msg: "Only Backend can complete bridging",
            who: "Creator",
          });
          stdlib.assert(v477, {
            at: "./index.rsh:94:24:application",
            fs: [
              "at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)",
            ],
            msg: "no NFT has been locked yet, so cannot complete bridging",
            who: "Creator",
          });
          const v908 = true;
          await txn2.getOutput("completeBridge", "v908", ctc10, v908);
          const cv475 = v475;
          const cv476 = true;
          const cv477 = true;
          const cv478 = v598;
          const cv480 = v866;
          const cv481 = v481;

          v475 = cv475;
          v476 = cv476;
          v477 = cv477;
          v478 = cv478;
          v480 = cv480;
          v481 = cv481;

          continue;
          break;
        }
        case "lockNFT0_73": {
          const v924 = v597[1];
          undefined /* setApiDetails */;
          const v971 = stdlib.safeAdd(
            v492,
            stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
          );
          const v973 = stdlib.Array_set(v491, "0", v971);
          const v974 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v973
          );
          const v1024 = stdlib.addressEq(v596, v464);
          stdlib.assert(v1024, {
            at: "./index.rsh:110:24:application",
            fs: [
              "at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)",
            ],
            msg: "You are not the bridger. Only Bridger can bridge NFT on this contract",
            who: "Creator",
          });
          await stdlib.mapSet(
            map0,
            v596,
            stdlib.checkedBigNumberify(
              "./index.rsh:112:39:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v1025 = true;
          await txn2.getOutput("lockNFT", "v1025", ctc10, v1025);
          const cv475 = v475;
          const cv476 = v476;
          const cv477 = true;
          const cv478 = v598;
          const cv480 = v974;
          const cv481 = v481;

          v475 = cv475;
          v476 = cv476;
          v477 = cv477;
          v478 = cv478;
          v480 = cv480;
          v481 = cv481;

          continue;
          break;
        }
      }
    }
  }
  return;
}
export async function _IERC721Receiver3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _IERC721Receiver3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _IERC721Receiver3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")
  );
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_73: ctc9,
    claimNFT0_73: ctc10,
    completeBridge0_73: ctc10,
    lockNFT0_73: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]
    );
  const v534 = stdlib.protect(ctc9, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)",
      'at ./index.rsh:68:75:application call to "runIERC721Receiver0_73" (defined at: ./index.rsh:145:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "in",
    who: "IERC721Receiver",
  });
  const v550 = ["IERC721Receiver0_73", v534];

  const txn1 = await ctc.sendrecv({
    args: [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492, v550],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:150:29:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:150:33:decimal",
            stdlib.UInt_max,
            "0"
          ),
          v465,
        ],
      ],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v597],
        secs: v599,
        time: v598,
        didSend: v304,
        from: v596,
      } = txn1;

      switch (v597[0]) {
        case "IERC721Receiver0_73": {
          const v600 = v597[1];
          sim_r.txns.push({
            kind: "api",
            who: "IERC721Receiver",
          });
          const v649 = stdlib.Array_set(v491, "0", v492);
          const v650 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v649
          );
          const v656 = "true";
          const v657 = await txn1.getOutput(
            "IERC721Receiver",
            "v656",
            ctc8,
            v656
          );

          const v1592 = v475;
          const v1593 = v476;
          const v1594 = v477;
          const v1596 = v650;
          const v1597 = v481;
          const v1598 =
            v650[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v1599 =
            v1598[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.isHalt = false;

          break;
        }
        case "claimNFT0_73": {
          const v708 = v597[1];

          break;
        }
        case "completeBridge0_73": {
          const v816 = v597[1];

          break;
        }
        case "lockNFT0_73": {
          const v924 = v597[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v597],
    secs: v599,
    time: v598,
    didSend: v304,
    from: v596,
  } = txn1;
  switch (v597[0]) {
    case "IERC721Receiver0_73": {
      const v600 = v597[1];
      undefined /* setApiDetails */;
      const v649 = stdlib.Array_set(v491, "0", v492);
      const v650 = stdlib.Array_set(
        v480,
        stdlib.checkedBigNumberify(
          "./index.rsh:68:75:dot",
          stdlib.UInt_max,
          "0"
        ),
        v649
      );
      const v656 = "true";
      const v657 = await txn1.getOutput("IERC721Receiver", "v656", ctc8, v656);
      if (v304) {
        stdlib.protect(ctc0, await interact.out(v600, v657), {
          at: "./index.rsh:146:13:application",
          fs: [
            "at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)",
            'at ./index.rsh:153:20:application call to "res" (defined at: ./index.rsh:152:13:function exp)',
            "at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)",
          ],
          msg: "out",
          who: "IERC721Receiver",
        });
      } else {
      }

      const v1592 = v475;
      const v1593 = v476;
      const v1594 = v477;
      const v1596 = v650;
      const v1597 = v481;
      const v1598 =
        v650[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v1599 =
        v1598[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      return;

      break;
    }
    case "claimNFT0_73": {
      const v708 = v597[1];
      return;
      break;
    }
    case "completeBridge0_73": {
      const v816 = v597[1];
      return;
      break;
    }
    case "lockNFT0_73": {
      const v924 = v597[1];
      return;
      break;
    }
  }
}
export async function _claimNFT3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _claimNFT3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _claimNFT3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")
  );
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]
    );
  const v519 = ctc.selfAddress();
  const v521 = stdlib.protect(ctc8, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)",
      'at ./index.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "in",
    who: "claimNFT",
  });
  const v523 = stdlib.addressEq(v519, v464);
  stdlib.assert(v523, {
    at: "./index.rsh:124:23:application",
    fs: [
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)",
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)",
      'at ./index.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "Only Bridger can claim NFT when bridging",
    who: "claimNFT",
  });
  stdlib.assert(v477, {
    at: "./index.rsh:125:23:application",
    fs: [
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)",
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)",
      'at ./index.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "Bridger must have NFT to claim. None available",
    who: "claimNFT",
  });
  const v527 = stdlib.gt(
    v492,
    stdlib.checkedBigNumberify(
      "./index.rsh:126:39:decimal",
      stdlib.UInt_max,
      "0"
    )
  );
  stdlib.assert(v527, {
    at: "./index.rsh:126:23:application",
    fs: [
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)",
      "at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)",
      'at ./index.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./index.rsh:120:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "Bridger must have NFT to claim. None available",
    who: "claimNFT",
  });
  const v530 = ["claimNFT0_73", v521];

  const txn1 = await ctc.sendrecv({
    args: [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492, v530],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:129:21:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:129:25:decimal",
            stdlib.UInt_max,
            "0"
          ),
          v465,
        ],
      ],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v597],
        secs: v599,
        time: v598,
        didSend: v304,
        from: v596,
      } = txn1;

      switch (v597[0]) {
        case "IERC721Receiver0_73": {
          const v600 = v597[1];

          break;
        }
        case "claimNFT0_73": {
          const v708 = v597[1];
          sim_r.txns.push({
            kind: "api",
            who: "claimNFT",
          });
          const v757 = stdlib.Array_set(v491, "0", v492);
          const v758 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v757
          );
          const v778 =
            v758[
              stdlib.checkedBigNumberify(
                "./index.rsh:134:32:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v779 =
            v778[
              stdlib.checkedBigNumberify(
                "./index.rsh:134:32:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v786 = stdlib.safeSub(
            v779,
            stdlib.checkedBigNumberify(
              "./index.rsh:136:26:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v788 = stdlib.Array_set(v778, "0", v786);
          const v789 = stdlib.Array_set(
            v758,
            stdlib.checkedBigNumberify(
              "./index.rsh:136:36:application",
              stdlib.UInt_max,
              "0"
            ),
            v788
          );
          sim_r.txns.push({
            kind: "from",
            to: v596,
            tok: v465,
          });
          await stdlib.simMapSet(
            sim_r,
            0,
            v596,
            stdlib.checkedBigNumberify(
              "./index.rsh:138:31:decimal",
              stdlib.UInt_max,
              "0"
            )
          );
          const v790 = true;
          const v791 = await txn1.getOutput("claimNFT", "v790", ctc5, v790);

          const v1642 = v475;
          const v1643 = v476;
          const v1644 = false;
          const v1646 = v789;
          const v1647 = v481;
          const v1648 =
            v789[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v1649 =
            v1648[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.isHalt = false;

          break;
        }
        case "completeBridge0_73": {
          const v816 = v597[1];

          break;
        }
        case "lockNFT0_73": {
          const v924 = v597[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v597],
    secs: v599,
    time: v598,
    didSend: v304,
    from: v596,
  } = txn1;
  switch (v597[0]) {
    case "IERC721Receiver0_73": {
      const v600 = v597[1];
      return;
      break;
    }
    case "claimNFT0_73": {
      const v708 = v597[1];
      undefined /* setApiDetails */;
      const v757 = stdlib.Array_set(v491, "0", v492);
      const v758 = stdlib.Array_set(
        v480,
        stdlib.checkedBigNumberify(
          "./index.rsh:68:75:dot",
          stdlib.UInt_max,
          "0"
        ),
        v757
      );
      const v776 = stdlib.addressEq(v596, v464);
      stdlib.assert(v776, {
        at: "./index.rsh:132:24:application",
        fs: [
          "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
        ],
        msg: "Only Bridger can claim NFT when bridging",
        who: "claimNFT",
      });
      stdlib.assert(v477, {
        at: "./index.rsh:133:24:application",
        fs: [
          "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
        ],
        msg: "Bridger must have NFT to claim. None available",
        who: "claimNFT",
      });
      const v778 =
        v758[
          stdlib.checkedBigNumberify(
            "./index.rsh:134:32:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v779 =
        v778[
          stdlib.checkedBigNumberify(
            "./index.rsh:134:32:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v780 = stdlib.gt(
        v779,
        stdlib.checkedBigNumberify(
          "./index.rsh:134:40:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      stdlib.assert(v780, {
        at: "./index.rsh:134:24:application",
        fs: [
          "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
        ],
        msg: "Bridger must have NFT to claim. None available",
        who: "claimNFT",
      });
      const v786 = stdlib.safeSub(
        v779,
        stdlib.checkedBigNumberify(
          "./index.rsh:136:26:decimal",
          stdlib.UInt_max,
          "1"
        )
      );
      const v788 = stdlib.Array_set(v778, "0", v786);
      const v789 = stdlib.Array_set(
        v758,
        stdlib.checkedBigNumberify(
          "./index.rsh:136:36:application",
          stdlib.UInt_max,
          "0"
        ),
        v788
      );
      await stdlib.mapSet(
        map0,
        v596,
        stdlib.checkedBigNumberify(
          "./index.rsh:138:31:decimal",
          stdlib.UInt_max,
          "0"
        )
      );
      const v790 = true;
      const v791 = await txn1.getOutput("claimNFT", "v790", ctc5, v790);
      if (v304) {
        stdlib.protect(ctc0, await interact.out(v708, v791), {
          at: "./index.rsh:121:13:application",
          fs: [
            "at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)",
            'at ./index.rsh:141:20:application call to "res" (defined at: ./index.rsh:131:13:function exp)',
            "at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)",
          ],
          msg: "out",
          who: "claimNFT",
        });
      } else {
      }

      const v1642 = v475;
      const v1643 = v476;
      const v1644 = false;
      const v1646 = v789;
      const v1647 = v481;
      const v1648 =
        v789[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v1649 =
        v1648[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      return;

      break;
    }
    case "completeBridge0_73": {
      const v816 = v597[1];
      return;
      break;
    }
    case "lockNFT0_73": {
      const v924 = v597[1];
      return;
      break;
    }
  }
}
export async function _completeBridge3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _completeBridge3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _completeBridge3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")
  );
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]
    );
  const v500 = ctc.selfAddress();
  const v502 = stdlib.protect(ctc8, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)",
      'at ./index.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./index.rsh:82:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "in",
    who: "completeBridge",
  });
  const v504 = stdlib.addressEq(v500, v463);
  stdlib.assert(v504, {
    at: "./index.rsh:86:23:application",
    fs: [
      "at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)",
      "at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)",
      'at ./index.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./index.rsh:82:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "Only Backend can complete bridging",
    who: "completeBridge",
  });
  stdlib.assert(v477, {
    at: "./index.rsh:87:23:application",
    fs: [
      "at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)",
      "at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)",
      'at ./index.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./index.rsh:82:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "no NFT has been locked yet, so cannot complete bridging",
    who: "completeBridge",
  });
  const v508 = ["completeBridge0_73", v502];

  const txn1 = await ctc.sendrecv({
    args: [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492, v508],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:90:21:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:90:25:decimal",
            stdlib.UInt_max,
            "0"
          ),
          v465,
        ],
      ],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v597],
        secs: v599,
        time: v598,
        didSend: v304,
        from: v596,
      } = txn1;

      switch (v597[0]) {
        case "IERC721Receiver0_73": {
          const v600 = v597[1];

          break;
        }
        case "claimNFT0_73": {
          const v708 = v597[1];

          break;
        }
        case "completeBridge0_73": {
          const v816 = v597[1];
          sim_r.txns.push({
            kind: "api",
            who: "completeBridge",
          });
          const v865 = stdlib.Array_set(v491, "0", v492);
          const v866 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v865
          );
          const v908 = true;
          const v909 = await txn1.getOutput(
            "completeBridge",
            "v908",
            ctc5,
            v908
          );

          const v1692 = v475;
          const v1693 = true;
          const v1694 = true;
          const v1696 = v866;
          const v1697 = v481;
          const v1698 =
            v866[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v1699 =
            v1698[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.isHalt = false;

          break;
        }
        case "lockNFT0_73": {
          const v924 = v597[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v597],
    secs: v599,
    time: v598,
    didSend: v304,
    from: v596,
  } = txn1;
  switch (v597[0]) {
    case "IERC721Receiver0_73": {
      const v600 = v597[1];
      return;
      break;
    }
    case "claimNFT0_73": {
      const v708 = v597[1];
      return;
      break;
    }
    case "completeBridge0_73": {
      const v816 = v597[1];
      undefined /* setApiDetails */;
      const v865 = stdlib.Array_set(v491, "0", v492);
      const v866 = stdlib.Array_set(
        v480,
        stdlib.checkedBigNumberify(
          "./index.rsh:68:75:dot",
          stdlib.UInt_max,
          "0"
        ),
        v865
      );
      const v906 = stdlib.addressEq(v596, v463);
      stdlib.assert(v906, {
        at: "./index.rsh:93:24:application",
        fs: [
          "at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)",
        ],
        msg: "Only Backend can complete bridging",
        who: "completeBridge",
      });
      stdlib.assert(v477, {
        at: "./index.rsh:94:24:application",
        fs: [
          "at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)",
        ],
        msg: "no NFT has been locked yet, so cannot complete bridging",
        who: "completeBridge",
      });
      const v908 = true;
      const v909 = await txn1.getOutput("completeBridge", "v908", ctc5, v908);
      if (v304) {
        stdlib.protect(ctc0, await interact.out(v816, v909), {
          at: "./index.rsh:83:13:application",
          fs: [
            "at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)",
            'at ./index.rsh:96:20:application call to "res" (defined at: ./index.rsh:92:13:function exp)',
            "at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)",
          ],
          msg: "out",
          who: "completeBridge",
        });
      } else {
      }

      const v1692 = v475;
      const v1693 = true;
      const v1694 = true;
      const v1696 = v866;
      const v1697 = v481;
      const v1698 =
        v866[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v1699 =
        v1698[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      return;

      break;
    }
    case "lockNFT0_73": {
      const v924 = v597[1];
      return;
      break;
    }
  }
}
export async function _lockNFT3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _lockNFT3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _lockNFT3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(
    ctc6,
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
  );
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "4")
  );
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492] =
    await ctc.getState(
      stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
      [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]
    );
  const v510 = ctc.selfAddress();
  const v512 = stdlib.protect(ctc8, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:13:function exp)",
      'at ./index.rsh:68:75:application call to "runlockNFT0_73" (defined at: ./index.rsh:100:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "in",
    who: "lockNFT",
  });
  const v514 = stdlib.addressEq(v510, v464);
  stdlib.assert(v514, {
    at: "./index.rsh:104:23:application",
    fs: [
      "at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:17:function exp)",
      "at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:13:function exp)",
      'at ./index.rsh:68:75:application call to "runlockNFT0_73" (defined at: ./index.rsh:100:13:function exp)',
      "at ./index.rsh:68:75:application call to [unknown function] (defined at: ./index.rsh:68:75:function exp)",
    ],
    msg: "You are not the bridger. Only Bridger can bridge NFT on this contract",
    who: "lockNFT",
  });
  const v517 = ["lockNFT0_73", v512];

  const txn1 = await ctc.sendrecv({
    args: [v463, v464, v465, v475, v476, v477, v480, v481, v491, v492, v517],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:107:21:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [
        [
          stdlib.checkedBigNumberify(
            "./index.rsh:107:25:decimal",
            stdlib.UInt_max,
            "1"
          ),
          v465,
        ],
      ],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v597],
        secs: v599,
        time: v598,
        didSend: v304,
        from: v596,
      } = txn1;

      switch (v597[0]) {
        case "IERC721Receiver0_73": {
          const v600 = v597[1];

          break;
        }
        case "claimNFT0_73": {
          const v708 = v597[1];

          break;
        }
        case "completeBridge0_73": {
          const v816 = v597[1];

          break;
        }
        case "lockNFT0_73": {
          const v924 = v597[1];
          sim_r.txns.push({
            kind: "api",
            who: "lockNFT",
          });
          const v971 = stdlib.safeAdd(
            v492,
            stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
          );
          const v973 = stdlib.Array_set(v491, "0", v971);
          const v974 = stdlib.Array_set(
            v480,
            stdlib.checkedBigNumberify(
              "./index.rsh:68:75:dot",
              stdlib.UInt_max,
              "0"
            ),
            v973
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1"),
            kind: "to",
            tok: v465,
          });
          await stdlib.simMapSet(
            sim_r,
            0,
            v596,
            stdlib.checkedBigNumberify(
              "./index.rsh:112:39:decimal",
              stdlib.UInt_max,
              "1"
            )
          );
          const v1025 = true;
          const v1026 = await txn1.getOutput("lockNFT", "v1025", ctc5, v1025);

          const v1742 = v475;
          const v1743 = v476;
          const v1744 = true;
          const v1746 = v974;
          const v1747 = v481;
          const v1748 =
            v974[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v1749 =
            v1748[
              stdlib.checkedBigNumberify(
                "./index.rsh:76:44:application",
                stdlib.UInt_max,
                "0"
              )
            ];
          sim_r.isHalt = false;

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false,
  });
  const {
    data: [v597],
    secs: v599,
    time: v598,
    didSend: v304,
    from: v596,
  } = txn1;
  switch (v597[0]) {
    case "IERC721Receiver0_73": {
      const v600 = v597[1];
      return;
      break;
    }
    case "claimNFT0_73": {
      const v708 = v597[1];
      return;
      break;
    }
    case "completeBridge0_73": {
      const v816 = v597[1];
      return;
      break;
    }
    case "lockNFT0_73": {
      const v924 = v597[1];
      undefined /* setApiDetails */;
      const v971 = stdlib.safeAdd(
        v492,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "1")
      );
      const v973 = stdlib.Array_set(v491, "0", v971);
      const v974 = stdlib.Array_set(
        v480,
        stdlib.checkedBigNumberify(
          "./index.rsh:68:75:dot",
          stdlib.UInt_max,
          "0"
        ),
        v973
      );
      const v1024 = stdlib.addressEq(v596, v464);
      stdlib.assert(v1024, {
        at: "./index.rsh:110:24:application",
        fs: [
          "at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)",
        ],
        msg: "You are not the bridger. Only Bridger can bridge NFT on this contract",
        who: "lockNFT",
      });
      await stdlib.mapSet(
        map0,
        v596,
        stdlib.checkedBigNumberify(
          "./index.rsh:112:39:decimal",
          stdlib.UInt_max,
          "1"
        )
      );
      const v1025 = true;
      const v1026 = await txn1.getOutput("lockNFT", "v1025", ctc5, v1025);
      if (v304) {
        stdlib.protect(ctc0, await interact.out(v924, v1026), {
          at: "./index.rsh:101:13:application",
          fs: [
            "at ./index.rsh:101:13:application call to [unknown function] (defined at: ./index.rsh:101:13:function exp)",
            'at ./index.rsh:114:20:application call to "res" (defined at: ./index.rsh:109:13:function exp)',
            "at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)",
          ],
          msg: "out",
          who: "lockNFT",
        });
      } else {
      }

      const v1742 = v475;
      const v1743 = v476;
      const v1744 = true;
      const v1746 = v974;
      const v1747 = v481;
      const v1748 =
        v974[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v1749 =
        v1748[
          stdlib.checkedBigNumberify(
            "./index.rsh:76:44:application",
            stdlib.UInt_max,
            "0"
          )
        ];
      return;

      break;
    }
  }
}
export async function IERC721Receiver(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for IERC721Receiver expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for IERC721Receiver expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _IERC721Receiver3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function claimNFT(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for claimNFT expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for claimNFT expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _claimNFT3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function completeBridge(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for completeBridge expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for completeBridge expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _completeBridge3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function lockNFT(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for lockNFT expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for lockNFT expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _lockNFT3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `IERC721Receiver(address,address,uint64,byte[4])byte[4]`,
      `claimNFT()byte`,
      `completeBridge()byte`,
      `lockNFT()byte`,
    ],
    pure: [
      `Bridger_v()address`,
      `Creator_v()address`,
      `balance_NFT_v()uint64`,
      `balance_v()uint64`,
      `bridgingComplete_v()byte`,
      `lockedNFT_v()byte`,
      `saved_v(address)uint64`,
    ],
    sigs: [
      `Bridger_v()address`,
      `Creator_v()address`,
      `IERC721Receiver(address,address,uint64,byte[4])byte[4]`,
      `balance_NFT_v()uint64`,
      `balance_v()uint64`,
      `bridgingComplete_v()byte`,
      `claimNFT()byte`,
      `completeBridge()byte`,
      `lockNFT()byte`,
      `lockedNFT_v()byte`,
      `saved_v(address)uint64`,
    ],
  },
  appApproval: `BiAWAAEDTAQICa349ZUI2dCEowueop60DJLu6+cMsLDzlgru9d6pCpS7oOQDyNbelwa5wM37B6aJr9cCAv///////////wFAe6CNBiYDAQABAQAiNQAxGEEE1SpkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgShNhoAF0lBAVgiNQQjNQZJIQcMQAC1SSEIDEAAY0khCQxAADxJIQoMQAAcIQoSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBlCEJEkQ0ASQSRChkKWRQSTUDVwAgNQdCBFEhCBJENAEkEkQiNhoBiARmSTX/I1s0/yJVTRY1B0IEMUkhCwxAADNJIQwMQAATIQwSRCo1/4ABAzT/UCWvUEIBOiELEkQ0ASQSRChkKWRQSTUDV2gBNQdCA/chBxJEKjX/KTT/UCWvUEIBEEkhDQxAAFNJIQ4MQAA5SSEPDEAAGSEPEkQ0ASQSRChkKWRQSTUDV0ggNQdCA7ghDhJENAEkEkQoZClkUEk1A1eUCDUHQgOfIQ0SRCo1/4ABAjT/UCWvUEIAtkkhEAxAABkhEBJENAEkEkQoZClkUEk1A1d7CDUHQgNsgf3whT0SRDQBJBJEKGQpZFBJNQNXaQE1B0IDUDYaAhc1BDYaAzYaARdJIREMQAIiSSQMQABfJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKdlxLSwMgYhEg9ENP8xABJENP80A1cgIDQDIRNbNANXSCA0A1doARc0A1dpARcyBjQDV2oRNAMhFFtCAjBIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/1cgIDX+IRNbNf1XSCA1/FdoARc1+1dpARc1+ldqETX5IRRbNfhXgxE194GUAVs19kk1BTX1gARgVjLXNPVQsDIGIRIMRDT1IlVJIREMQACNSSQMQABPJBJEIzT9iAKhMQA0/hJEMQAogAkBAAAAAAAAAAFmgAkAAAAAAAAEAQGwKTUHNP80/jT9NPw0+yMyBjT3NPYjCBY19FcICTT0TFA0+EIBaEgxADT/EkQ0+kSACQAAAAAAAAOMAbApNQc0/zT+NP00/CMjMgY09zT2FjX0VwgJNPRMUDT4QgEwSSMMQAB+SDT3NPYWNfNXCAk080xQNfQxADT+EkQ0+kQ09FcAEUk18yJbSTXyIg1EsSKyASOyEiEEshAxALIUNP2yEbMxACiACQEAAAAAAAAAAGaACQAAAAAAAAMWAbApNQc0/zT+NP00/DT7IjIGNPM08iMJFjXxVwgJNPFMUDT4QgCsSIAMAAAAAAAAApB0cnVlsIAEdHJ1ZTUHNP80/jT9NPw0+zT6MgY09zT2FjX0VwgJNPRMUDT4QgBzIhJEIRWIAUYiNAESRDQESSISTDQCEhFESTUFSVcAIDX/gSBbNf6ABNnpsco0/1A0/hZQsIERrzX9IRWIARCxIrIBIrISIQSyEDIKshQ0/rIRszEANP80/jT/IiIyBjT9VwARIQWvNfxXCAk0/ExQIkIAADX/Nf41/TX8Nfs1+jX5Nfg19zT+VwARSTX2Ils19TT3NPhQNPkWUDT6UDT7FlEHCFA0/BZRBwhQNP5QNP8WUDT2UDT1FlAoSwFXAH9nKUsBV38dZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 156,
  unsupported: [],
  version: 10,
  warnings: [],
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
                "name": "v464",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v465",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v464",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v465",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
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
                        "internalType": "struct T11",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_IERC721Receiver0_73",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_completeBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v597",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T17",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1025",
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
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v656",
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
    "name": "_reach_oe_v790",
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
    "name": "_reach_oe_v908",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
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
                        "internalType": "struct T11",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_IERC721Receiver0_73",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_completeBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v597",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T17",
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
    "name": "bridgingComplete_v",
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
    "name": "completeBridge",
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
        "name": "v1758",
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
  Bytecode: `0x608060405260405162002bb138038062002bb1833981016040819052620000269162000575565b60008055436003556200003862000306565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a180516000908190528151602090810182905282516040019190915281519082015152620000c43415600e62000184565b620000ce6200033d565b8051339052602083810180515183516001600160a01b039182169084015281518301518451908216604091820152915151838501805191909216905280516000908401819052815183018190529051436060918201528584018051845192830185528383528151518601519583019590955251518301511515928101929092526200015a9291620001ae565b6020820180516080019190915251600060a0909101526200017b8162000231565b5050506200079b565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001b86200036f565b60005b60018110156200020e57848160018110620001da57620001da620005ea565b6020020151828260018110620001f457620001f4620005ea565b602002015280620002058162000600565b915050620001bb565b5081818460018110620002255762000225620005ea565b60200201529392505050565b6200023b620003bc565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e086015283518101515161010086015292519092015151516101208401526003600055436001559051620002db9183910162000677565b60405160208183030381529060405260029080519060200190620003019291906200043d565b505050565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620003386200036f565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810162000338620004cc565b60405180602001604052806001905b620003a5604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200037e5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101620003fd6200036f565b81526020016000815260200162000430604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b8280546200044b906200075e565b90600052602060002090601f0160209004810192826200046f5760008555620004ba565b82601f106200048a57805160ff1916838001178555620004ba565b82800160010185558215620004ba579182015b82811115620004ba5782518255916020019190600101906200049d565b50620004c89291506200050a565b5090565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160001515815260200160008152602001620004306200036f565b5b80821115620004c857600081556001016200050b565b604080519081016001600160401b03811182821017156200055257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200057057600080fd5b919050565b600081830360608112156200058957600080fd5b6200059362000521565b835181526040601f1983011215620005aa57600080fd5b620005b462000521565b9150620005c46020850162000558565b8252620005d46040850162000558565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200062357634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b600181101562000671576200065a84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200062e565b50505050565b81516001600160a01b031681526101c081016020830151620006a460208401826001600160a01b03169052565b506040830151620006c060408401826001600160a01b03169052565b506060830151620006dc60608401826001600160a01b03169052565b506080830151620006f1608084018215159052565b5060a08301516200070660a084018215159052565b5060c08301516200071b60c08401826200062a565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b600181811c908216806200077357607f821691505b602082108114156200079557634e487b7160e01b600052602260045260246000fd5b50919050565b61240680620007ab6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063ae53e28511610061578063ae53e2851461025e578063bee2660914610271578063d2b339bd14610279578063d76a47691461028e578063e43ffb9f146102a357005b80638323075714610209578063844971b21461021e578063ab53f2c614610233578063ac74d6c11461025657005b8063672756ad116100c8578063672756ad1461019d57806369e13bd7146101b557806373b4522c146101e1578063819938fc146101f457005b80631e93b0f1146100ff5780633894aea5146101235780633a3dbe72146101505780633bc5b7bf1461017057005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561012f57600080fd5b506101386102b8565b6040516001600160a01b03909116815260200161011a565b34801561015c57600080fd5b5061011061016b366004611ba2565b6102ca565b34801561017c57600080fd5b5061019061018b366004611ba2565b6102f4565b60405161011a9190611bd5565b6101a5610320565b604051901515815260200161011a565b6101c86101c3366004611d33565b610350565b60405190516001600160e01b031916815260200161011a565b6100fd6101ef366004611d85565b6103c7565b34801561020057600080fd5b506101386103eb565b34801561021557600080fd5b50600154610110565b34801561022a57600080fd5b506101a56103f7565b34801561023f57600080fd5b50610248610403565b60405161011a929190611dc9565b6101a56104a0565b6100fd61026c366004611e03565b6104d0565b6101a56104f0565b34801561028557600080fd5b50610110610520565b34801561029a57600080fd5b506101a561052c565b3480156102af57600080fd5b50610110610538565b6000806102c481610544565b91505090565b60408051602081019091526001600160a01b03821681526000906102ed8161060a565b9392505050565b604080516060810182526000808252602082018190529181019190915261031a82610706565b92915050565b600061032a6118da565b6020810151516001905261033c6118f9565b61034682826107d8565b6020015192915050565b6040805160208101909152600081526103676118da565b6020818101805151600090528051518201516001600160a01b0389811690915281515183015190881690830152805151820151604001869052515101516060018390526103b26118f9565b6103bc82826107d8565b519695505050505050565b6103cf6118f9565b6103e76103e136849003840184611e2f565b82610f19565b5050565b6000806102c4816110f4565b6000806102c4816111b8565b60006060600054600280805461041890611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461044490611e85565b80156104915780601f1061046657610100808354040283529160200191610491565b820191906000526020600020905b81548152906001019060200180831161047457829003601f168201915b50505050509050915091509091565b60006104aa6118da565b602081015151600290526104bc6118f9565b6104c682826107d8565b6040015192915050565b6104d86118f9565b6103e76104ea36849003840184611eba565b826107d8565b60006104fa6118da565b6020810151516003905261050c6118f9565b61051682826107d8565b6060015192915050565b6000806102c48161127c565b6000806102c481611341565b6000806102c481611405565b6000600360005414156105f95760006002805461056090611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90611e85565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505050508060200190518101906105f1919061208c565b519392505050565b610605600060086114c5565b919050565b6000600360005414156106fa5760006002805461062690611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461065290611e85565b801561069f5780601f106106745761010080835404028352916020019161069f565b820191906000526020600020905b81548152906001019060200180831161068257829003601f168201915b50505050508060200190518101906106b7919061208c565b9050600183516106c690610706565b5160018111156106d8576106d8611bbf565b146106e45760006102ed565b82516106ef90610706565b604001519392505050565b6106056000600d6114c5565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561075257610752611bbf565b14156107c9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561079357610793611bbf565b60018111156107a4576107a4611bbf565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6107e8600360005414601d6114c5565b81516108039015806107fc57508251600154145b601e6114c5565b60008080556002805461081590611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461084190611e85565b801561088e5780601f106108635761010080835404028352916020019161088e565b820191906000526020600020905b81548152906001019060200180831161087157829003601f168201915b50505050508060200190518101906108a6919061208c565b90506108b061192b565b6108bf6000194310601f6114c5565b7f10274362ae12430bf790d953f6db461dd3740ec137ea015d7042f3b81bd489ac33856040516108f092919061214e565b60405180910390a1600060208501515151600381111561091257610912611bbf565b1415610a5c576109243415600f6114c5565b61093e61093733846040015160006114eb565b60106114c5565b8051637472756560e01b9052805160405190516001600160e01b03191681527f12d8a1bf9052927e9b42e44717a0bf709c4b9967f454c2c2dcb1808555ac4e759060200160405180910390a18051835261099661194c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519015159084015260a08701518451901515908301529251439084015260c086015181519384018252610120870151845261010087018051840151938501939093529151810151151590830152610a3591600090611501565b6020820180516080019190915260e0840151905160a00152610a5681611575565b50610f13565b6001602085015151516003811115610a7657610a76611bbf565b1415610c5057610a88341560116114c5565b610acb8260c00151600060405180606001604052808661012001518152602001866101000151602001518152602001866101000151604001511515815250611501565b8160200181905250610aed610ae633846040015160006114eb565b60126114c5565b610b1082602001516001600160a01b0316336001600160a01b03161460136114c5565b610b1f8260a0015160146114c5565b60208101515151610b3390151560156114c5565b610b438260400151336001611644565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f8b7c04b80da66f78012eb5ea464906a9d795c02c8240d02a6cee08ace14eb4a0910160405180910390a160016020840152610ba761194c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845190151590840152835160009083018190529351439082015291850180518251938401909252515151610a35939192908190610c2a906001611658565b815260208781018051518201519183019190915251516040908101511515910152611501565b6002602085015151516003811115610c6a57610c6a611bbf565b1415610d9257610c7c341560166114c5565b610c96610c8f33846040015160006114eb565b60176114c5565b8151610cae906001600160a01b0316331460186114c5565b610cbd8260a0015160196114c5565b604051600181527f1b20dbc3c6b28e0bb81efe134cbada22b008f7dbbd7e4e526248df253fd4d65c9060200160405180910390a160016040840152610d0061194c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600190840181905284518301529251439084015260c086015181519384018252610120870151845261010087018051840151938501939093529151810151151590830152610a3591600090611501565b6003602085015151516003811115610dac57610dac611bbf565b1415610f1357610dbe3415601a6114c5565b610dd8610dd133846040015160016114eb565b601b6114c5565b610dfb82602001516001600160a01b0316336001600160a01b031614601c6114c5565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f4eacd25120789f2a4e76a0e7ce6aa990c2efa5600c817e17f9b1ead034574323910160405180910390a160016060840152610e6061194c565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451901515930192909252825160019082018190529251439083015260c08601518151928301909152610120860151610a3593919260009290918291610eeb91906116a7565b8152602001876101000151602001518152602001876101000151604001511515815250611501565b50505050565b610f2960036000541460226114c5565b8151610f44901580610f3d57508251600154145b60236114c5565b600080805560028054610f5690611e85565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8290611e85565b8015610fcf5780601f10610fa457610100808354040283529160200191610fcf565b820191906000526020600020905b815481529060010190602001808311610fb257829003601f168201915b5050505050806020019051810190610fe7919061208c565b9050610ff960001943101560246114c5565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161104c341560206114c5565b8051611064906001600160a01b0316331460216114c5565b61106c61194c565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935260a080870151855190151593019290925283514391015260c085015183519092019190915260e084015191510152610f1381611575565b6000600360005414156111ac5760006002805461111090611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461113c90611e85565b80156111895780601f1061115e57610100808354040283529160200191611189565b820191906000526020600020905b81548152906001019060200180831161116c57829003601f168201915b50505050508060200190518101906111a1919061208c565b606001519392505050565b610605600060076114c5565b600060036000541415611270576000600280546111d490611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461120090611e85565b801561124d5780601f106112225761010080835404028352916020019161124d565b820191906000526020600020905b81548152906001019060200180831161123057829003601f168201915b5050505050806020019051810190611265919061208c565b608001519392505050565b6106056000600b6114c5565b6000600360005414156113355760006002805461129890611e85565b80601f01602080910402602001604051908101604052809291908181526020018280546112c490611e85565b80156113115780601f106112e657610100808354040283529160200191611311565b820191906000526020600020905b8154815290600101906020018083116112f457829003601f168201915b5050505050806020019051810190611329919061208c565b61012001519392505050565b610605600060096114c5565b6000600360005414156113f95760006002805461135d90611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461138990611e85565b80156113d65780601f106113ab576101008083540402835291602001916113d6565b820191906000526020600020905b8154815290600101906020018083116113b957829003601f168201915b50505050508060200190518101906113ee919061208c565b60a001519392505050565b6106056000600c6114c5565b6000600360005414156114bd5760006002805461142190611e85565b80601f016020809104026020016040519081016040528092919081815260200182805461144d90611e85565b801561149a5780601f1061146f5761010080835404028352916020019161149a565b820191906000526020600020905b81548152906001019060200180831161147d57829003601f168201915b50505050508060200190518101906114b2919061208c565b60e001519392505050565b6106056000600a5b816103e75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006114f9838530856116f4565b949350505050565b61150961197c565b60005b600181101561155557848160018110611527576115276121fd565b602002015182826001811061153e5761153e6121fd565b60200201528061154d81612229565b91505061150c565b5081818460018110611569576115696121fd565b60200201529392505050565b61157d6119c7565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e08601528351810151516101008601529251909201515151610120840152600360005543600155905161161b91839101612288565b6040516020818303038152906040526002908051906020019061163f929190611a45565b505050565b61164f8383836117ce565b61163f57600080fd5b6000826116658382612368565b915081111561031a5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016114e2565b6000826116b4838261237f565b915081101561031a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016114e2565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161175b91612397565b60006040518083038185875af1925050503d8060008114611798576040519150601f19603f3d011682016040523d82523d6000602084013e61179d565b606091505b50915091506117ae8282600161189f565b50808060200190518101906117c391906123b3565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161182d91612397565b60006040518083038185875af1925050503d806000811461186a576040519150601f19603f3d011682016040523d82523d6000602084013e61186f565b606091505b50915091506118808282600261189f565b508080602001905181019061189591906123b3565b9695505050505050565b606083156118ae5750816102ed565b8251156118be5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016114e2565b6040518060400160405280600081526020016118f4611ac9565b905290565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b604080516060810182526000918101918252908152602081016118f461197c565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016118f4611adc565b60405180602001604052806001905b6119b1604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161198b5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101611a0661197c565b815260200160008152602001611a38604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054611a5190611e85565b90600052602060002090601f016020900481019282611a735760008555611ab9565b82601f10611a8c57805160ff1916838001178555611ab9565b82800160010185558215611ab9579182015b82811115611ab9578251825591602001919060010190611a9e565b50611ac5929150611b18565b5090565b60405180602001604052806118f4611b2d565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160001515815260200160008152602001611a3861197c565b5b80821115611ac55760008155600101611b19565b6040805160a081019091528060008152602001611910604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016118f460408051602081019091526000815290565b6001600160a01b0381168114611b9f57600080fd5b50565b600060208284031215611bb457600080fd5b81356102ed81611b8a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611bec57611bec611bbf565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611c4557611c45611c0c565b60405290565b6040516020810167ffffffffffffffff81118282101715611c4557611c45611c0c565b60405160a0810167ffffffffffffffff81118282101715611c4557611c45611c0c565b6040516080810167ffffffffffffffff81118282101715611c4557611c45611c0c565b604051610140810167ffffffffffffffff81118282101715611c4557611c45611c0c565b600060208284031215611cea57600080fd5b6040516020810181811067ffffffffffffffff82111715611d0d57611d0d611c0c565b60405290508082356001600160e01b031981168114611d2b57600080fd5b905292915050565b60008060008060808587031215611d4957600080fd5b8435611d5481611b8a565b93506020850135611d6481611b8a565b925060408501359150611d7a8660608701611cd8565b905092959194509250565b600060408284031215611d9757600080fd5b50919050565b60005b83811015611db8578181015183820152602001611da0565b83811115610f135750506000910152565b8281526040602082015260008251806040840152611dee816060850160208701611d9d565b601f01601f1916919091016060019392505050565b60006101208284031215611d9757600080fd5b8015158114611b9f57600080fd5b803561060581611e16565b600060408284031215611e4157600080fd5b6040516040810181811067ffffffffffffffff82111715611e6457611e64611c0c565b604052823581526020830135611e7981611e16565b60208201529392505050565b600181811c90821680611e9957607f821691505b60208210811415611d9757634e487b7160e01b600052602260045260246000fd5b6000818303610120811215611ece57600080fd5b611ed6611c22565b8335815261010080601f1984011215611eee57600080fd5b611ef6611c4b565b611efe611c6e565b602087013560048110611f1057600080fd5b81526080603f1986011215611f2457600080fd5b611f2c611c91565b94506040870135611f3c81611b8a565b85526060870135611f4c81611b8a565b602086015260808701356040860152611f688860a08901611cd8565b6060860152846020820152611f7f60c08801611e24565b6040820152611f9060e08801611e24565b6060820152611fa0838801611e24565b60808201528152602083015250949350505050565b805161060581611b8a565b805161060581611e16565b600060608284031215611fdd57600080fd5b6040516060810181811067ffffffffffffffff8211171561200057612000611c0c565b80604052508091508251815260208301516020820152604083015161202481611e16565b6040919091015292915050565b600082601f83011261204257600080fd5b61204a611c4b565b8060608085018681111561205d57600080fd5b855b81811015612080576120718882611fcb565b8552602090940193820161205f565b50919695505050505050565b60006101c0828403121561209f57600080fd5b6120a7611cb4565b6120b083611fb5565b81526120be60208401611fb5565b60208201526120cf60408401611fb5565b60408201526120e060608401611fb5565b60608201526120f160808401611fc0565b608082015261210260a08401611fc0565b60a08201526121148460c08501612031565b60c08201526101208084015160e0830152612133856101408601611fcb565b6101008301526101a084015181830152508091505092915050565b6001600160a01b038381168252825160208084019190915283015151805161014084019291906004811061218457612184611bbf565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c086015250604081015191506121d960e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561223d5761223d612213565b5060010190565b8060005b6001811015610f135761227284835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612248565b81516001600160a01b031681526101c0810160208301516122b460208401826001600160a01b03169052565b5060408301516122cf60408401826001600160a01b03169052565b5060608301516122ea60608401826001600160a01b03169052565b5060808301516122fe608084018215159052565b5060a083015161231260a084018215159052565b5060c083015161232560c0840182612244565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b60008282101561237a5761237a612213565b500390565b6000821982111561239257612392612213565b500190565b600082516123a9818460208701611d9d565b9190910192915050565b6000602082840312156123c557600080fd5b81516102ed81611e1656fea2646970667358221220b147aafce4cc35da7084c9d60af19e344d6ced849b930d22acbd46081bf7ea1664736f6c634300080c0033`,
  BytecodeLen: 11185,
  Which: `oD`,
  version: 7,
  views: {
    Bridger_v: `Bridger_v`,
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    bridgingComplete_v: `bridgingComplete_v`,
    lockedNFT_v: `lockedNFT_v`,
    saved_v: `saved_v`,
  },
};
export const _stateSourceMap = {
  2: {
    at: "./index.rsh:161:17:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:68:75:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  Creator: Creator,
  IERC721Receiver: IERC721Receiver,
  claimNFT: claimNFT,
  completeBridge: completeBridge,
  lockNFT: lockNFT,
};
export const _APIs = {
  IERC721Receiver: IERC721Receiver,
  claimNFT: claimNFT,
  completeBridge: completeBridge,
  lockNFT: lockNFT,
};
