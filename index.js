
const record  = [
    {year: '2021', result: "L"},
    {year: '2020', result: "W"},
    {year: '2019', result: "N/A"}
];

  function superbowlWin (arrOfObj) {
    let win = arrOfObj.find(obj => {
        return obj.result === "W";
    });
return win ? win.year : undefined;}
