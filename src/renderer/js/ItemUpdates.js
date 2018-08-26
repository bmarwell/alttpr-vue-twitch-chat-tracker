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

   /**
   * update hookshot.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static hookshot(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'hook…' or 'hookshot'.
    if (['hook'].indexOf(firstParam) >= 0 && (secondParam == null || secondParam === undefined)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update mushroom.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static mushroom(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    // just 'mushroom…' or 'shroom'.
    if (['shroom'].indexOf(firstParam) >= 0 || ['mushroom'].indexOf(firstParam) >= 0) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update magic powder.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static powder(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'mushroom…' or 'shroom'.
    if (['powder'].indexOf(firstParam) >= 0
    || (['mag'].indexOf(firstParam) >= 0 && ['pow'].indexOf(secondParam) >= 0)
    || (['magicp'].indexOf(firstParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update firerod.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static firerod(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'fire rod' or 'firerod'.
    if (['firerod'].indexOf(firstParam) >= 0
    || (['fire'].indexOf(firstParam) >= 0 && ['rod'].indexOf(secondParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update icerod.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static firerod(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'fire rod' or 'firerod'.
    if (['icerod'].indexOf(firstParam) >= 0
    || (['ice'].indexOf(firstParam) >= 0 && ['rod'].indexOf(secondParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update bombos.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static bombos(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'fire rod' or 'firerod'.
    if (['bombos'].indexOf(firstParam) >= 0
    || (['med'].indexOf(firstParam) >= 0 && ['bomb'].indexOf(secondParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update ether.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static ether(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'fire rod' or 'firerod'.
    if (['ether'].indexOf(firstParam) >= 0
    || (['med'].indexOf(firstParam) >= 0 && ['ether'].indexOf(secondParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }

  /**
   * update quake.
   *
   * @param {trackerItem} trackerItem trackeritem to update.
   * @param {Array} params blah.
   */
  static quake(trackerItem, params) {
    if (params[0] === undefined) {
      return;
    }

    const firstParam = params[0];
    const secondParam = params[1];
    // just 'fire rod' or 'firerod'.
    if (['quake'].indexOf(firstParam) >= 0
    || (['med'].indexOf(firstParam) >= 0 && ['quake'].indexOf(secondParam) >= 0)) {
      trackerItem.nextState();
      return;
    }
  }
}

export default ItemUpdates;
