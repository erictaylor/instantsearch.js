export const castToJestMock = <TFunction extends (...args: never[]) => unknown>(
  func: TFunction
) => func as jest.MockedFunction<typeof func>;
