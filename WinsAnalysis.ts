import { MatchData } from '../MatchData';
import {Analyzer} from '../Summary';
import { MatchResult } from '../MatchResult';
export class winsAnalysis implements Analyzer{
    constructor(public team:string){}
 run(matches:MatchData[]):string{
    let Wins =0;
    for (let match of matches){
        if(match[1]=='Man United'&& match[5]===MatchResult.HomeWin){
        Wins++;
        }
        else if (match[2]==='Man United'&& match[5]===MatchResult.AwayWin ){
            Wins++;
        }
    
    
    }
    return`Team ${this.team} won $ {wins} game`;
 }
}