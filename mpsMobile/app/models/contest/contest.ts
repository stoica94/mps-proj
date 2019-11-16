import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { RoundModel, RoundSnapshot } from '../round';

/**
 * Model description here for TypeScript hints.
 */
export const ContestModel = types
  .model('Contest')
  .props({
    id: types.number,
    name: types.string,
    type: types.string,
    startTime: types.Date,
    endTime: types.Date,
    password: types.string,
    rounds: types.optional(types.array(RoundModel), []),
  })
  .actions(self => ({
    setRounds: (rounds: RoundSnapshot[]) => {
      self.rounds.replace(rounds as any);
    },
  }));

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ContestType = Instance<typeof ContestModel>;
export interface Contest extends ContestType {}
type ContestSnapshotType = SnapshotOut<typeof ContestModel>;
export interface ContestSnapshot extends ContestSnapshotType {}
