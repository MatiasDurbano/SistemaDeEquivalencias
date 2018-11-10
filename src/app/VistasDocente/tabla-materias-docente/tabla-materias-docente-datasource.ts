import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaMateriasDocenteItem {
  materia: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaMateriasDocenteItem[] = [
  {id: 1, materia: 'Programación 1'},
  {id: 2, materia: 'calculo'},
 
];

/**
 * Data source for the TablaMateriasDocente view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaMateriasDocenteDataSource extends DataSource<TablaMateriasDocenteItem> {
  data: TablaMateriasDocenteItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }


  delete(id: number){

    this.data.splice(id-1,1);
    var arr={};
    var arr2=[];

    //guardo los valores
    for (var i = 0; i < this.data.length; ++i) {
      arr=Object.values(this.data[i]);
      arr[0]=i+1;
      arr2.push(arr[0]);
      arr2.push(arr[1]);
      
    }
    //borro array
     while (this.data.length) { 
       this.data.pop(); 
     }

    //cargo de nuevo los datos
    for (var i = 0; i < arr2.length-1; i=i+2) {
      this.data.push({id:arr2[i],materia: arr2[i+1]});
    }


   }

   add(materia: string){
      this.data.push({id: EXAMPLE_DATA.length+1 ,materia: materia});
   }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaMateriasDocenteItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaMateriasDocenteItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaMateriasDocenteItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'materia': return compare(a.materia, b.materia, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
