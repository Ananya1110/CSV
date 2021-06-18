"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportsTargets/ConsoleReport";
// import { winsAnalysis } from "./analyzers/WinsAnalysis";
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
//matchreader.matches
var summary = Summary_1.Summary.WinsAnalysisWithHtmlReport('Man united');
summary.buildAndPrintReport(matchReader.matches);
