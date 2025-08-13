export function createActionType(section: string, type: string) {
  const action = {
    _REQUEST: `@@${section.toLowerCase()}/${type.toUpperCase()}_REQUEST`,
    _SUCCESS: `@@${section.toLowerCase()}/${type.toUpperCase()}_SUCCESS`,
    _ERROR: `@@${section.toLowerCase()}/${type.toUpperCase()}_ERROR`,
  };
  return action;
}
