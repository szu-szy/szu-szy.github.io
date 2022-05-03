type MovieImageType = {
  attributes: {
    height: string;
  };
  label: string;
};

type MovieIDType = {
  label: string;
  attributes: {
    'im:id': string;
  };
};

type MovieNameType = {
  label: string;
};

type MovieContentType = {
  attributes: {
    term: string;
    label: string;
  };
};

type MovieSummaryType = {
  label: string;
};

export type MovieType = {
  id: MovieIDType;
  'im:name': MovieNameType;
  'im:image': MovieImageType[];
  'im:contentType': MovieContentType;
  summary: MovieSummaryType;
};
