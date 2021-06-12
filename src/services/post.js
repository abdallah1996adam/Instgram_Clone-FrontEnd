import api from "./api";

const postService = {
  userPost: async (title, body, pic) => {
    const postData = { title, body, pic };
    return await api.post("newpost", postData);
  },
};


export default postService;
