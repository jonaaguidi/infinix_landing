class Util {
    extend(custom, defaults) {
      for (let key in custom) {
        let value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    }
  
    isMobile(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    }
  }
  
  export default Util;
  