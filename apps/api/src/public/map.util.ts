export function clusterPoints(points: any[], zoom: number) {
  // simple grid clustering (not perfect, but production-feel)
  const cell = zoom >= 15 ? 0.002 : zoom >= 13 ? 0.005 : 0.01; // degrees
  const buckets = new Map<string, any>();

  for (const p of points) {
    const x = Math.floor(p.lng / cell);
    const y = Math.floor(p.lat / cell);
    const key = `${x}:${y}`;

    const b = buckets.get(key) ?? {
      count: 0,
      latSum: 0,
      lngSum: 0,
      statuses: {} as Record<string, number>,
      ids: [] as string[],
    };

    b.count += 1;
    b.latSum += p.lat;
    b.lngSum += p.lng;
    b.statuses[p.currentStatus] = (b.statuses[p.currentStatus] ?? 0) + 1;
    if (b.ids.length < 25) b.ids.push(p.id);

    buckets.set(key, b);
  }

  return Array.from(buckets.values()).map((b) => ({
    count: b.count,
    lat: b.latSum / b.count,
    lng: b.lngSum / b.count,
    statuses: b.statuses,
    sampleIds: b.ids,
  }));
}
