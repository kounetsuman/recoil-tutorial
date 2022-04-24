import { useMemo } from "react"
import { useRecoilCallback, useRecoilSnapshot } from "recoil"

export default function QueryErrorMessage({ error }: { error: Error }) {
  const snapshot = useRecoilSnapshot();
  const selectors = useMemo(() => {
    const ret = [];
    const nodes = snapshot.getNodes_UNSTABLE({ isInitialized: true });
    for (const node of nodes) {
      const { loadable } = snapshot.getInfo_UNSTABLE(node);
      if (loadable != null && loadable.state === 'hasError' && loadable.contents === error) {
        ret.push(node);
      }
    }
    return ret;
  }, [snapshot, error]);
  const retry = useRecoilCallback(({refresh}) =>
    () => selectors.forEach(refresh),
    [selectors],
  );

  return selectors.length > 0 && (
    <div>
      Error: {error.toString()}
      Query: {selectors[0].key}
      <button onClick={retry}>Retry</button>
    </div>
  );
}
