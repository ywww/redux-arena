import { put } from "redux-saga/effects";
import getArenaReducerDictEntry from "./getArenaReducerDictEntry";

const putSceneAction = function*(action, key = "_curScene") {
  let entry = yield* getArenaReducerDictEntry(key);
  let newAction = Object.assign({}, action, {
    _sceneReducerKey: entry.reducerKey
  });
  yield put(newAction);
};

putSceneAction.resolve = function*(actionPromise, key = "_curScene") {
  let action = yield actionPromise;
  let entry = yield* getArenaReducerDictEntry(key);
  let newAction = Object.assign({}, action, {
    _sceneReducerKey: entry.reducerKey
  });
  yield put(newAction);
};

export default putSceneAction;
