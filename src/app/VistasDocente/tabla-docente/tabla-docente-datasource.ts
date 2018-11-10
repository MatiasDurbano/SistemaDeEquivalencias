import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaDocenteItem {
  universidad: string;
  apellido: string;
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaDocenteItem[] = [
  {id: 1, name: 'Pedro', apellido: " Perez", universidad: "El salvador"},
  {id: 2, name: 'juan', apellido: " Trivago", universidad: "UTN"},
  {id: 3, name: 'Ismael', apellido: " Mercadolibre", universidad: "UTN"},
  {id: 4, name: 'Beryllium', apellido: " TT", universidad: "UBA"},
  {id: 5, name: 'Boron', apellido: " AAA", universidad: "UBA"},
  {id: 6, name: 'Carbon', apellido: " RERERERE", universidad: "UBA"},
  {id: 7, name: 'Nitrogen', apellido: " Perez", universidad: "El salvador"},
  {id: 8, name: 'Oxygen', apellido: " Perez", universidad: "El salvador"},
  {id: 9, name: 'Fluorine', apellido: " Perez", universidad: "El salvador"},
  {id: 10, name: 'Neon', apellido: " Perez", universidad: "El salvador"},
  {id: 11, name: 'Sodium', apellido: " Perez", universidad: "El salvador"},
  {id: 12, name: 'Magnesium', apellido: " Perez", universidad: "El salvador"},
  {id: 13, name: 'Aluminum', apellido: " Perez", universidad: "El salvador"},
  {id: 14, name: 'Silicon', apellido: " Perez", universidad: "El salvador"},
  {id: 15, name: 'Phosphorus', apellido: " Perez", universidad: "El salvador"},
  {id: 16, name: 'Sulfur', apellido: " Perez", universidad: "El salvador"},
  {id: 17, name: 'Chlorine', apellido: " Perez", universidad: "El salvador"},
  {id: 18, name: 'Argon', apellido: " Perez", universidad: "El salvador"},
  {id: 19, name: 'Potassium', apellido: " Perez", universidad: "El salvador"},
  {id: 20, name: 'Calcium', apellido: " Perez", universidad: "El salvador"},
];

/**
 * Data source for the TablaDocente view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaDocenteDataSource extends DataSource<TablaDocenteItem> {
  data: TablaDocenteItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaDocenteItem[]> {
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
  private getPagedData(data: TablaDocenteItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaDocenteItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
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
