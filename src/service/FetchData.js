export default class FetchData {

    startUrl = 'https://api.spacexdata.com/v4';

    getResourse = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Произошла ошибка ${res.status}`)
        }

        return await res.json();
    };

    getRocket = async () => 
        this.getResourse(this.startUrl + '/rockets');

    getLaunches = async () => 
        this.getResourse(this.startUrl + '/launches/past');

    getCompany = async () => 
        this.getResourse(this.startUrl + '/company');

}