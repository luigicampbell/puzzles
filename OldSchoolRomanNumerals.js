let old_school_roman_numeral = "";
// const changeOldSchoolRomanNumeral = a =>
let GCF = 0;

function changeOldSchoolRomanNumeral (a){

  for (let i = 0; i < a; ++i){
    if( a < 5 ){
      old_school_roman_numeral = "I".repeat(a);
    }
    if( a >=5 ){
      old_school_roman_numeral = "V"
      .repeat(a / 5) + "I"
      .repeat(a % 5);
    }

    if ( a >= 10 ){
      old_school_roman_numeral = "X"
      .repeat( a / 10 ) + "I"
      .repeat( a % 5 );
  }
  if ( a >= 15 ){
    old_school_roman_numeral = "XV"
    .repeat( a / 10 ) + "I"
    .repeat( a % 5 );
}
if ( a >= 20 ){
  old_school_roman_numeral = "X"
  .repeat( a / 10 ) + "I"
  .repeat( a % 5 );
}
  if ( a >= 50){
      old_school_roman_numerclearal = "L"
      .repeat( a / 50 ) + "I"
      .repeat( a % 50 );
    }
    if ( a >= 100 ){
      old_school_roman_numeral = "C"
      .repeat( a / 100 ) + "I"
      .repeat( a % 100 );
    }
    if ( a >= 500 ){
      old_school_roman_numeral = "D"
      .repeat( a / 500 ) + "I"
      .repeat( a % 500 );
    }
    if ( a >= 1000 ){
      old_school_roman_numeral = "M"
      .repeat( a / 1000 ) + "I"
      .repeat( a % 1000 );
    }
  }
  console.log(old_school_roman_numeral);
}

for(let j = 1; j < 22; ++j){
  changeOldSchoolRomanNumeral(j);
}
