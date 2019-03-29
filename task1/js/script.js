let rectangles = document.getElementsByClassName("rectangle");
let area = document.getElementById("area");


for (let r of rectangles) {
    // mousedown listener for all rectangles
    r.addEventListener("mousedown", function (e) {
        let area_coords = area.getBoundingClientRect();
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
            if (move_x < 0) {
                r.style.left = "0px";
            } else {
                r.style.left = `${move_x}px`;
            }
            if (move_y < 0) {
                r.style.top = "0px";
            } else {
                r.style.top = `${move_y}px`;
            }
            // when rectangle move to bottom and right sides of area
            if (move_x > area_coords.width - coords.box.width) {
                r.style.left = `${area_coords.width - coords.box.width}px`;
            }
            if (move_y > area_coords.height - coords.box.height) {
                r.style.top = `${area_coords.height - coords.box.height}px`;
            }
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
        console.log(box);
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
            box: box
        };
    }

    // disable browser drag and drop
    r.addEventListener("dragstart", function () {
        return false;
    });
}
