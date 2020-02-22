const { hashSync, compareSync } = require("bcrypts");
const rounds = 10;

const Auth = {
  gen: async password => {
    try {
      const hash = await hashSync(password, rounds);
      console.log(`... hash generated -> ${hash}`);
      return hash;
    } catch (err) {
      console.log(`... error generating hash -> ${err}`);
      return undefined;
    }
  },
  vs: async (password, hash) => {
    try {
      const check = compareSync(password, hash);
      console.log(`... password verification status : ${check}`);
      return check;
    } catch (err) {
      console.log(`... error verifying password`);
      return false;
    }
  }
};

module.exports = Auth;
