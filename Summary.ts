import { MatchData } from "./MatchData";
import { winsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportsTargets/HtmlReports";

export interface Analyzer {
    run(matches: MatchData[]): string;

}
export interface OutputTarget {
    print(report: string): void;
}
export class Summary {
    static WinsAnalysisWithHtmlReport(team:string):Summary{
        return new Summary(new winsAnalysis(team),new HtmlReport());
        
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

buildAndPrintReport(matches: MatchData[]): void {
    const output=this.analyzer.run(matches);
    this.outputTarget.print(output);
}
}


