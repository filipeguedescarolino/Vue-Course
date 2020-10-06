Vue.component(`task-list`, {
    template: `<div>
                    <task v-for="task in tasks"> {{task.task}}</task>
                </div>`,

    data() {
        return {
            tasks: [

                { task: "go to the store", complete: true },
                { task: "go to the email", complete: false },
                { task: "go to the farm", complete: true },
                { task: "go to the work", complete: false },
            ]


        };
    }
});

new Vue({

    el: "#root"
});