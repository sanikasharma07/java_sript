js has two type of arrays:
continous and holey

arrays are optimized in all the lang
Based on what kind of values are stored in array and what kind of array it is,an array is optimized.
 SMI(small integer)
 Packed element
 Double(float,string,function)

 const arr=[1,2,,,4] // there is hole in array at index 2
 //PACKED_SMI_ELEMENTS -> the most optimized type of array
 ex-> const arrtwo= [1,2,3,4]  we call continous packed
arrtwo.push(7.3) // packed_double_elements
arrtwo.push('7)// packed_elements


Each kind of array will have diff optimization

aeetwo[10]=11
//HOLEY_ELEMENTS;


conosole.log(arrtwo[19])// out of bound 
gives undefined->very costly
so we do bound check
arr[9]-> not out of bound
but no value since holey array 
hasownproperty(arrtwo,9) two check is there is value at this index in array
hasownproperty(arrtwo.prototype,10)- > if not found,check inits prototype
hasownproperty(Object.prototype,10) then in object 

#thisssss is veryyyy costlyyyyyy
 
 SMI>Double>Packed  ... order of optimization
 HMI>HDobule>HPacked


 const arr4=new Array(3)
 initially it is considered as Holy_Smi
 noww we can downgrade it
 arr4[0]='1'// HOLEY_ELEMENTS

so to optinize most
we do arr4 =[]->this kind if initialisation
arr4.push('4')-> this is now packed elements

if we push infinity or nan the array becomes packed double
