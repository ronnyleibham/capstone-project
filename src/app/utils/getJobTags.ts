export default async function getJobTags(): Promise<[]> {
  const getFetch = await fetch(`/api/jobs/`);
  const fetchResult = await getFetch.json();

  const allTags = fetchResult.result.summary[0].items.map(
    (item: { label: string }) => {
      return item.label;
    }
  );
  return allTags;
}
