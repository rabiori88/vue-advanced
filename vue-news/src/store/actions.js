import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/index";
export default {
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      // console.log(pageName + " " + response.data);
      return response;
    } catch (error) {
      console.log(error);
    }

    // return fetchList(pageName)
    //   .then(({ data }) => {
    //     commit("SET_LIST", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
