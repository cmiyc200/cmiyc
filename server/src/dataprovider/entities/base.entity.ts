export class BaseEntity {

    public fetchMap(map: any): string[] {
        let keys = Object.keys(map);
        let members: string[] = [];
        keys.forEach(key => {
            console.log(key.toString());
            members.push(key);
        });
        return members;
    }

}