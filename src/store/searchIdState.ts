import {makeAutoObservable} from "mobx";
import {ISearchId} from '../interfaces/ISearchId'

class SearchIdState {
    state: ISearchId = {
        searchId: ''
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export const searchIdState = new SearchIdState();