function checkCashRegister(price, cash, cid) {
  // setup
  let vals = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = [];
  
  // calculate change
  let computedChange = (cash-price).toFixed(2);

  // get greatest possible val for change
  let gp = Math.max(...vals.filter(a => (computedChange >= a)));

  // get index of greatest possible value
  let gpIndex = vals.indexOf(gp);

  // make sure that GPV is not empty
  let anchor = gpIndex;
  for(let i=gpIndex; i>=0; i--){
    if(cid[i][1] > 0)
      break;
    anchor--;
  }

  // adjust gp
  gp = vals[anchor];

  // calculate cash in drawer
  let sum = 0;
  for(let i=0; i<=anchor; i++){
    sum += cid[i][1];
  }

  if(computedChange-sum === 0) {
    return {status: "CLOSED", change: cid};
  } else if(computedChange-sum > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    // get available quantity in cid
    let ableAmount = cid[anchor][1];

    // determine max freq
    let freq = 0;
    for(let i=1;i<=computedChange/gp;i++){
      let product = gp*i;
      if(product > ableAmount) 
        break;
      else
        freq++;
    }
    
    let currChangeGiven = freq * gp;

    console.log(gp, computedChange, ableAmount, cid[anchor], freq, currChangeGiven)

    // check if available quantity is greater than needed quantity
    if(ableAmount-currChangeGiven >= 0) {
      // if true, push amount of currency unit and value
      change.push([cid[anchor][0], currChangeGiven])

      // update cash-in-drawer
      cid[anchor][1] -= currChangeGiven;

      console.log(cid)

      // check for remainder
      let progress = Number(currChangeGiven) + Number(price);
      let rem = (cash - progress).toFixed(2);

      if(rem > 0) {
        // get new price
        let newPrice = progress.toFixed(2);
        change.push(...checkCashRegister(newPrice, cash, cid));
      } 
    }

    // checker
    sum = 0;
    for(let item of change){
      // get sum
      sum += item[1]
    }
    if(Math.round(price+sum) === cash) {
      change = {
        status: "OPEN",
        change: change
      };
      return change;
    }
  }
  console.log(change);
  return change;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
