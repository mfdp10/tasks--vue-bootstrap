<template>
    <h1>Tasks view</h1>
    <DataTable :columns="columns" :options="options" :data="tareas" class="table table-hover table-striped" width="100%">
        <thead>
            <tr>
                <th style="width: 20px" class="text-center"><v-icon name="fa-flag" /></th>
                <th style="width: 20px" class="text-center"><i class="fa fa-wrench"></i></th>
                <th style="max-width: 100px" class="text-center">
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-tasks"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.actions") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><v-icon name="fa-flag" /><i
                            class="fa fa-file-text"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.subject") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-calendar"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.beginDate") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-tag"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.category") }}</span>
                </th>
                <th></th>
                <th style="width: 25px; text-align: center;"><i class="fa fa-camera"></i></th>
                <th>Extra 10</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th style="width: 20px" class="text-center"><i class="fa fa-plus"></i></th>
                <th style="width: 20px" class="text-center"><i class="fa fa-wrench"></i></th>
                <th style="max-width: 100px" class="text-center">
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-tasks"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.actions") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-file-text"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.subject") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-calendar"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.beginDate") }}</span>
                </th>
                <th>
                    <span class="d-inline d-md-none d-lg-none d-xl-none"><i class="fa fa-tag"></i></span>
                    <span class="d-none d-md-inline d-lg-inline d-xl-inline">{{ $t("tasksScreen.lbl.category") }}</span>
                </th>
                <th></th>
                <th style="width: 25px; text-align: center;"><i class="fa fa-camera"></i></th>
                <th>Extra 10</th>
            </tr>
        </tfoot>
    </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import useAuth from '@/store/auth';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-responsive';
import router from "../router/index"

DataTable.use(DataTablesCore);
const store = useAuth()
const tareas = ref([])

onMounted(async () => {
    tareas.value = await store.getTasks()
    // console.log('tareas', tareas)
})


const columns = [
    { "data": null, "defaultContent": "", "className": 'control', "orderable": false },
    { "data": null, "defaultContent": "<i class=\"fa fa-angle-double-down\"></i>", "className": 'details-control text-center', "orderable": false },
    { "data": "functions", orderable: false, "className": "no_wrap" },
    { "data": "subject" },
    {
        "data": "dateBegin",
        // render: function (d) {
        // return moment(d).format("DD/MM/YYYY HH:mm");
        // }
    },
    { "data": "category" },
    { "data": "userId", "visible": false },
    { "data": "image", "className": "text-center", "width": "40", "defaultContent": "<i>Not set</i>", orderable: false, "visible": true },
    { "data": "category", "visible": false }
]

const options = {
    "responsive": "true",
    "processing": "true",
    "rowCallback": function (nRow, aData) {
        nRow.querySelector('td:nth-child(4)').innerHTML = "<a class=\"text-body\" href=\"/taskDetails/" + aData["id"] + "\">" + aData["subject"] + "</a>";
    }


    // "language": {
    //     "decimal": "",
    //     "emptyTable": "{{$t('DtEmptyTable')}}",
    //     "info": "DtInfo",
    //     "infoEmpty": "DtInfoEmpty",
    //     "infoFiltered": "DtInfoFiltered",
    //     "infoPostFix": "",
    //     "infoThousands": "DtInfoThousands",
    //     "lengthMenu": "DtLengthMenu",
    //     "loadingRecords": "DtLoadingRecords",
    //     "processing": "<span id='loading'></span>",
    //     "search": "DtSearch",
    //     "zeroRecords": "DtZeroRecords",
    //     "paginate": {
    //         "first": "DtPaginateFirst",
    //         "last": "DtPaginateLast",
    //         "next": "DtPaginateNext",
    //         "previous": "DtPaginatePrevious"
    //     },
    //     "aria": {
    //         "sortAscending": "DtSortAscending",
    //         "sortDescending": "DtSortDescending"
    //     }
    // },
}
</script>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
