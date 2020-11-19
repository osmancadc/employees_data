# Employees data

Employees data is a single page application used to read and print information from different employees in a excel file.

It has several characteristics like 

* Upload Excel file
* See, filter and sort a table with the info extracted from the excel file.
* Export to PDF,CSV,XLSX or print format

## Installation
### Dependencies
First of all you must install the dependencies for this project, using the node package manager, using:

```bash
    npm install
```
### Running

Second must have a apache distribution to be able to run the application.

By example if you are using apache, you should copy the folder to the directory 

```bash
    */xampp/htdocs/
```
then just run your localhost and acces the link correpsondent to the project, example

```url
    http://localhost/employees_data/
```

### Running

To test the upload of the excel file, you can use the template located inside this project.

```bash
    ./assets/templateEmployees.xlsx
```
After upload the excel file to the platform automatically will appear the table with the extracted data, and you'll see the JSON in the console.

The table can be filteres using the dynamic buttons on the top
![alt text](https://github.com/osmancadc/employees_data/assets/readme/blob/main/filters.png?raw=true)

## License
[MIT](https://choosealicense.com/licenses/mit/)