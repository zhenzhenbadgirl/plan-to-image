var table = new Vue({
    el: ".wrapper",
    data: {
        actionData: [
            { Name: "翘臀分腿蹲", Intensity: 12, Circulation: 3, Unit: "个" },
            { Name: "击掌俯卧撑", Intensity: 15, Circulation: 3, Unit: "个" },
            { Name: "弹力带俯身内旋侧平举", Intensity: 10, Circulation: 4, Unit: "个" },
        ],
        describeRows: 1,
        cautionRows: 1,
    },
    methods: {
        addAction: function () {
            let newAction = {
                Name: "",
                Intensity: 12,
                Circulation: 3,
                Unit: "个"
            };
            this.actionData.push(newAction);

            // swal("hi","","info"); //为什么?
        },
        addDescribeRows: function () {
            $(".plan-describe").show();
            if (this.describeRows > 0) {
                this.describeRows++;
            } else {
                if (this.describeRows == 0) {
                    this.describeRows = 1;
                }
            }
        },
        cutDescribeRows: function () {
            if (this.describeRows > 1) {
                this.describeRows--;
            } else {
                if (this.describeRows == 1) {
                    this.describeRows--;
                    $(".plan-describe").hide();
                }
            }
        },
        addCautionRows: function () {
            $(".table-foot").show();
            if (this.cautionRows > 0) {
                this.cautionRows++;
            } else {
                if (this.cautionRows == 0) {
                    this.cautionRows = 1;
                }
            }
        },
        cutCautionRows: function () {
            if (this.cautionRows > 1) {
                this.cautionRows--;
            } else {
                if (this.cautionRows == 1) {
                    this.cautionRows--;
                    $(".table-foot").hide();
                }
            }
        },
        showWatermake: function () {
            $(".watermark").toggle();
        },
        exportImgToPng: function () {
            let type = "png";
            let imgData = canvas.toDataURL(type);
        },
    }
})