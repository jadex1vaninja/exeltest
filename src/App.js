import "./App.css";
import React from "react";
// import { ExcelFile, ExcelSheet } from "react-export-excel";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const object = {
  1: {
    name_en: "Prevalence of drug use - general population",
    name_ar: null,
    values: [2.0254, 0.71, null, null, 2.0254],
  },
  141: {
    name_en: "Human Freedom Index",
    name_ar: null,
    values: [5.29, null, 7.81, 7.05, 5.29],
  },
};
const country = [
  "Country 1",
  "Country 2",
  "Country 3",
  "Country 4",
  "Country 5",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Download></Download>
      </header>
    </div>
  );
}
function Download() {
  return (
    <ExcelFile>
      <ExcelSheet data={Object.values(object)} name="Employees">
        <ExcelColumn label="" value="name_en" />
        {country.map((e, index) => {
          return (
            <ExcelColumn
              label={e}
              value={(col) => col.values[index] || "пришел налл"}
            />
          );
        })}
      </ExcelSheet>
    </ExcelFile>
  );
}

export default App;
