let rectangles = document.getElementsByClassName("rectangle");
let area = document.getElementById("area");


for (let r of rectangles) {
    // mousedown listener for all rectangles
    r.addEventListener("mousedown", function (e) {
        let coords = getCoords(r);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;

        r.style.position = "absolute";
        document.body.appendChild(r);
        move(e);

        r.style.zIndex = 99; // over other element

        function move(e) {
            let move_x = e.pageX - shiftX;
            let move_y = e.pageY - shiftY;
            r.style.left = `${move_x}px`;
            r.style.top = `${move_y}px`;
        }

        document.onmousemove = function (e) {
            move(e);
        };

        // end of moving
        r.onmouseup = function () {
            document.onmousemove = null;
            r.onmouseup = null;
        };
    });

    function getCoords(element) {
        let box = element.getBoundingClientRect();
        console.log(area.getBoundingClientRect());
        // console.log(box);
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    r.addEventListener("dragstart", function () {
        return false;
    });
}
