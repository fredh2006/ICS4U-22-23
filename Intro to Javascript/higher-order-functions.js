let add = function (a, b){
    let result = 0;
        for(let i = a; i<=b; i++){
            result+=i
        }
        return result;
}

let add2 = (a, b) => {
    let result = 0;
        for(let i = a; i<=b; i++){
            result+=i
        }
        return result;
}

// console.log(add(1, 10));
// console.log(add2(1, 10));

function mystery(){
    return 42;
}

function mystery2(callback){
    let result = callback() + 5;
    console.log(result);
}
mystery2(mystery)


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
 ];
 
 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 
 // forEach
 companies.forEach((val) => {console.log(val.name);});
 companies.forEach((val, i) => {console.log(`${i}: ${val.name}`)});
 
 // filter 

 // Get 21 and older
 const arr = ages.filter((age)=> age >=21);
 console.log(arr);

 // Filter retail companies
 const retail = companies.filter(company => company.category === 'Retail')
 console.log(retail);
 
 // Get 80s companies
 const time = companies.filter(company => company.start>= 1980 && company.end<1990)
 console.log(time);
 
 // Get companies that lasted 10 years or more
 const last = companies.filter(company => (company.end - company.start) >= 10)
 console.log(last);

 // map

// create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age*2);


console.log(ageMap);

//sort

//sort companies start date
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//sort ages
const sortAges = ages.sort((a, b) => a-b);
console.log(sortAges);

// reduce
// let ageSum = 0;
//  for(let i = 0; i<ages.length; i++){
//     ageSum += ages[i];
//  }

const ageSum = ages.reduce((total, age) => total + age, 0)

// get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

console.log(totalYears);

// combine methods

const combined = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a, b) => a-b)
    .reduce((a, b) => a+b, 0);

console.log(combined);
 