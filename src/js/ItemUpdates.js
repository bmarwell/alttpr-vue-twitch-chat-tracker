/**
 * Methods for tracker Items.
 */
class ItemUpdates {
  /**
   * on bow.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static bow(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    if (['bow'].indexOf(params[0]) >= 0) {
      trackerItem.nextState();
    }
  }

  /**
   * on arrows.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static arrows(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    if (['arrows', 'silvers'].indexOf(params[0]) >= 0) {
      trackerItem.nextState();
    }
  }

  /**
   * on arrows.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static boomerang(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'boomerang'.
    if (['boomerang'].indexOf(firstParam) >= 0 && (secondParam == null || secondParam === undefined)) {
      trackerItem.nextState();
      return;
    }

    if (['boomerang'].indexOf(firstParam) >= 0 && secondParam === 'blue') {
      // 0 = disabled, 1 = blue, 2 = red, 3 = both
      trackerItem.setState(1);
      return;
    }

    if (['boomerang'].indexOf(firstParam) >= 0 && secondParam === 'red') {
      // 0 = disabled, 1 = blue, 2 = red, 3 = both
      trackerItem.setState(2);
      return;
    }

    if (['boomerang'].indexOf(firstParam) >= 0 && secondParam === 'both') {
      // 0 = disabled, 1 = blue, 2 = red, 3 = both
      trackerItem.setState(3);
      return;
    }


    if (['bluemerang'].indexOf(firstParam) >= 0) {
      trackerItem.setState(1);
      return;
    }

    if (['rederang', 'lagerang', 'laggerang'].indexOf(firstParam) >= 0) {
      trackerItem.setState(2);
      return;
    }
  }
}

export default ItemUpdates;
