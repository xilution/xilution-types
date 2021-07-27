export interface IAccessPolicy {
  update?: {
    allow?: {
      users?: string[];
      organizations?: string[];
    };
    deny?: {
      users?: string[];
      organizations?: string[];
    };
  };
  delete?: {
    allow?: {
      users?: string[];
      organizations?: string[];
    };
    deny?: {
      users?: string[];
      organizations?: string[];
    };
  };
  read?: {
    allow?: {
      users?: string[];
      organizations?: string[];
    };
    deny?: {
      users?: string[];
      organizations?: string[];
    };
  };
}
