import setSceneState from "./setSceneState";
import getSceneState from "./getSceneState";
import getArenaReducerDictEntry from "./getArenaReducerDictEntry";
import getSceneActions from "./getSceneActions";
import takeSceneAction from "./takeSceneAction";
import takeEverySceneAction from "./takeEverySceneAction";
import takeLatestSceneAction from "./takeLatestSceneAction";
import putSceneAction from "./putSceneAction";

console.warn("Saga operations is deprecated, and will be removed in future.");
export {
  setSceneState,
  getSceneState,
  getArenaReducerDictEntry,
  getSceneActions,
  takeSceneAction,
  takeEverySceneAction,
  takeLatestSceneAction,
  putSceneAction
};
