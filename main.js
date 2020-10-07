Vue.component(`task-list`, {
    template: `<div>
                    <task v-for="task in tasks"> {{task.chordes}}</task>
                </div>`,

    data() {
        return {
            tasks: [

                { chordes: "go to the store", complete: true },
                { chordes: "go to the email", complete: false },
                { chordes: "go to the farm", complete: true },
                { chordes: "go to the work", complete: false },
            ]


        };
    }
});

Vue.component(`task`, {
    template: `<li><slot></slot></li>`
});

new Vue({

    el: "#root"
});