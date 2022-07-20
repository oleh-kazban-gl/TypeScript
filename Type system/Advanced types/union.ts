function authorize(user: User | Person): void {
  // ...
}

function add(to: string | number, from: string | number): string {
  return `${to} + ${from}`;
}

function formatCommandline(command: string[] | string) {
  var line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  // ...
}

// ---
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
pet.swim();

// >> Property 'swim' does not exist on type 'Bird | Fish'.
//   Property 'swim' does not exist on type 'Bird'.

// ---
enum NetworkStateEnume {
  LOADING = "loading",
  FAILED = "failed",
  SUCCESS = "success"
};

type NetworkLoadingState = { state: NetworkStateEnume.LOADING };
type NetworkFailedState = { state: NetworkStateEnume.FAILED; code: number; };
type NetworkSuccessState = {
  state: NetworkStateEnume.SUCCESS;
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function checkState(state: NetworkState): void {
  switch (state.state) {
    case NetworkStateEnume.SUCCESS:
    // ...
    case NetworkStateEnume.LOADING:
    // ...
    case NetworkStateEnume.SUCCESS:
    // ...
  }
}
