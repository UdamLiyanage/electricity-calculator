function reset()
{
    $('#category').val("d");
    $('#units').val(0);
}

function calculate()
{
    var category = $('#category').val();
    var unitsUsed = $('#units').val();
    switch(category) {
        case "d":
            domestic(unitsUsed); 
            break;
        case "r":
            religious(unitsUsed);
            break;
        case "g":
            general(unitsUsed);
            break;
        case "h":
            hotel(unitsUsed);
            break;
        case "i":
            industrial(unitsUsed);
    }
}

function domestic(units)
{
    var unitCost = 0;
    var fixedCharge= 0;
    var fuelCharge = 0;
    if (units<=0) {
        unitCost = 0;
    } 
    else {
        if(units>0 && units <= 60) {
            if(units <=30) {
                unitCost = units*2.50;
                fixedCharge = 30;
            }
            else {
                unitCost = (30*2.50) + ( (units-30) *4.85 );
                fixedCharge = 60;
            }
        } else {
            if (units>60 && units<=90) {
                unitCost = (60*7.85) + ( (units-60)*10 );
                fixedCharge = 90;
            } else if (units>90 && units<=120) {
                unitCost = (60*7.85) + (30*10) + ( (units-90)*27.75 );
                fixedCharge = 480;
            } else if (units>120 && units<=180) {
                unitCost = (60*7.85) + (30*10) + (30*27.75) + ( (units-120)* 32);
                fixedCharge = 480;
            } else {
                unitCost = (60*7.85) + (30*10) + (30*27.75) + (60*32) + ( (units-180)*45 );
                fixedCharge = 540;
            }
        }
    }
    $('#totUnitCharge').text(unitCost);
    $('#fuelCharge').text(fuelCharge);
    $('#fixedCharge').text(fixedCharge);
    $('#grandTotal').text(unitCost+fuelCharge+fixedCharge);
}

function religious(units)
{
    var unitCost = 0;
    var fixedCharge= 0;
    var fuelCharge = 0;
    if (units<=0){
        unitCost = 0;
    } 
    else {
        if(units>0 && units<=30) {
            unitCost = units*1.90;
            fixedCharge = 30;
        } else if (units>30 && units<=90) {
            unitCost = (30*1.90) + ( (units-30)*2.80 );
            fixedCharge = 60;
        } else if (units>90 && units<=120) {
            unitCost = (30*1.90) + (60*2.80) +( (units-90)*6.75 );
            fixedCharge = 180;
        } else if (units>120 && units<=180) {
            unitCost = (30*1.90) + (60*2.80) + (30*6.75) +( (units-120)*7.50 );
            fixedCharge = 180;
        } else {
            unitCost = (30*1.90) + (60*2.80) + (30*6.75) + (60*7.50) +( (units-180)*9.40 );
            fixedCharge = 240;
        }
    }
    $('#totUnitCharge').text(unitCost);
    $('#fuelCharge').text(fuelCharge);
    $('#fixedCharge').text(fixedCharge);
    $('#grandTotal').text(unitCost+fuelCharge+fixedCharge);
}

function general(units)
{
    var unitCost = 0;
    var fixedCharge= 0;
    var fuelCharge = 0;
    if(units < 0) {
        unitCost = 0;
    }
    else {
        if(units>0 && units<=300) {
            unitCost = units*18.30;
            fixedCharge = 240;
        }
        else {
            unitCost = units*22.85;
            fixedCharge = 240;
        }
    }
    $('#totUnitCharge').text(unitCost);
    $('#fuelCharge').text(fuelCharge);
    $('#fixedCharge').text(fixedCharge);
    $('#grandTotal').text(unitCost+fuelCharge+fixedCharge);
}

function hotel(units) 
{
    var unitCost = 0;
    var fixedCharge= 0;
    var fuelCharge = 0;
    if(units < 0) {
        unitCost = 0;
    }
    else {
        unitCost = units*21.50;
        fixedCharge = 600;
    }
    $('#totUnitCharge').text(unitCost);
    $('#fuelCharge').text(fuelCharge);
    $('#fixedCharge').text(fixedCharge);
    $('#grandTotal').text(unitCost+fuelCharge+fixedCharge);
}

function industrial(units)
{
    var unitCost = 0;
    var fixedCharge= 0;
    var fuelCharge = 0;
    if(units < 0) {
        unitCost = 0;
    }
    else {
        if(units>0 && units<=300) {
            unitCost = units*10.80;
            fixedCharge = 600;
        }
        else {
            unitCost = units*12.20;
            fixedCharge = 600;
        }
    }
    $('#totUnitCharge').text(unitCost);
    $('#fuelCharge').text(fuelCharge);
    $('#fixedCharge').text(fixedCharge);
    $('#grandTotal').text(unitCost+fuelCharge+fixedCharge);
}
