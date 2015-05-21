(function() {
    var work = function () {
        console.log("doing a lot of work");
    };

    var doWork = function (fn) {
        console.log("before work");
        try {
            fn();
        } catch (ex) {
            console.log(ex);
        }
        console.log("after work");
    };

// doWork(work);

// functions as modules
    var createWorker = function () {
        var workCount = 0;

        function jobOne() {
            console.log("doing job nbr 1");
            workCount++;
        }

        function jobTwo() {
            console.log("doing job nbr 2");
            workCount++;
        }

        return {
            job1: jobOne,
            job2: jobTwo,
            getCount: function () {
                return workCount;
            }
        };
    };

    var worker = createWorker();
    worker.job1();
    worker.job2();
    worker.job2();
    console.log("worker count = " + worker.getCount());

}());
