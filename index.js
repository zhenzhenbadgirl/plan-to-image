var table = new Vue({
    el: ".wrapper",
    data: {
        actionData: [
            { Name: "翘臀分腿蹲", Intensity: 12, Circulation: 3, Unit: "个" },
            { Name: "击掌俯卧撑", Intensity: 15, Circulation: 3, Unit: "个" },
            { Name: "弹力带俯身内旋侧平举", Intensity: 10, Circulation: 4, Unit: "个" },
        ],
        describeRows: 1,
        cautionRows: 1
    },
    methods: {
        addAction: function () {
            var newAction = {
                Name: "",
                Intensity: 12,
                Circulation: 3,
                Unit: "个"
            };
            this.actionData.push(newAction);
        },
        addDescribeRows: function () {
            $(".plan-describe").show();
            if (this.describeRows > 0) {
                this.describeRows++;
            }
            else {
                if (this.describeRows == 0) {
                    this.describeRows = 1;
                }
            }
        },
        cutDescribeRows: function () {
            if (this.describeRows > 1) {
                this.describeRows--;
            }
            else {
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
            }
            else {
                if (this.cautionRows == 0) {
                    this.cautionRows = 1;
                }
            }
        },
        cutCautionRows: function () {
            if (this.cautionRows > 1) {
                this.cautionRows--;
            }
            else {
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
            html2canvas($("#canv"), {
                allowTaint: true,
                taintTest: false,
                onrendered: function (canvas) {
                    var dataUrl = canvas.toDataURL();
                    var saveFile = function (data, filename) {
                        var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                        $(save_link).attr("href", data);
                        $(save_link).attr("download", filename);
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        save_link.dispatchEvent(event);
                    };
                    var filename = 'plan_' + Now() + '.' + 'png';
                    saveFile(dataUrl, filename);
                }
            });
            function Now() {
                var myDate = new Date();
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;
                var date = myDate.getDate();
                var now = year + "" + month + "" + date;
                return now;
            }
        },
        showQRCode: function (event) {
        }
    }
});
//# sourceMappingURL=index.js.map