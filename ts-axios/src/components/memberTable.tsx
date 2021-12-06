import React, { useEffect, useState } from 'react'; 
import { MemberEntity } from '../model/member';
import { getMembersCollection } from '../api/memberApi';

var print = console.log.bind(console);

const useMemberCollection = () => {
    const [memberCollection,setMemberCollection] = useState<MemberEntity[]>([]);
    const loadMemberCollection = async () => {
        const memberCollection = await getMembersCollection();
        setMemberCollection(memberCollection);
    }

    return { memberCollection, loadMemberCollection };
}

export const MemberTableComponent:React.FC = () => {
    const { memberCollection, loadMemberCollection } = useMemberCollection();
    useEffect(() => {
        // print(memberCollection);
        loadMemberCollection();
    },[]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>7
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memberCollection.map((member) => 
                            <MemberRow key={member.id} member={member}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const MemberRow = ({ member }: { member: MemberEntity }) => {
    return (
        <tr>
            <td>
                <img src={member.avatar_url} alt="" style={{maxWidth:"10rem"}} />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
}

