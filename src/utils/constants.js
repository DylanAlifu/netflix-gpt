const LOGO_IMG =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/127254347?v=4";

const PROFILE_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_large.jpg";

const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "cn",
    name: "Chinese",
  },
];

export {
  LOGO_IMG,
  GITHUB_AVATAR,
  BACKGROUND_IMG,
  PROFILE_AVATAR,
  API_OPTION,
  IMAGE_CDN_URL,
  SUPPORTED_LANGUAGES,
  OPEN_AI_KEY,
};
