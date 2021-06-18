import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportsTargets/ConsoleReport";
// import { winsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportsTargets/HtmlReports";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
//matchreader.matches
const summary= Summary.WinsAnalysisWithHtmlReport('Man united');
summary.buildAndPrintReport(matchReader.matches);




    





