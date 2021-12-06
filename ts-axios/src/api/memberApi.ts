import { MemberEntity } from "../model/member";
import Axios, { AxiosResponse } from "axios";
// ts + react /model
const githubURL = "https://api.github.com";
const githubMemberUrl = `${githubURL}/orgs/lemoncode/members`;

var print = console.log.bind(console);

/**
 *  Member[]
 */
export const getMembersCollection = ():Promise<MemberEntity[]> => {
    // resolve([1])
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
      try {
        // response -> MembemrEntity 
        Axios.get<MemberEntity[]>(githubMemberUrl).then(response => {
          // print(response);
          return resolve(mapMemberListApiToModel(response));
        })
      } catch(e) {
        print(e);
        reject(e);
      }
    })
    return promise
}

const mapMemberListApiToModel = ({data}:AxiosResponse<any[]>):MemberEntity[] => data.map(githubMember => ({
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  }))