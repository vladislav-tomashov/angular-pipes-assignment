import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    value: Record<string, unknown>[],
    sortBy: string
  ): Record<string, unknown>[] {
    const result = [...value].sort((a, b) => {
      const aEl = a[sortBy];
      const bEl = b[sortBy];

      if (aEl < bEl) {
        return -1;
      }

      if (aEl > bEl) {
        return 1;
      }

      return 0;
    });

    return result;
  }
}
