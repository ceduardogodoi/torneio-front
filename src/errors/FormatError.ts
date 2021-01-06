/**
 * Error handling for formatting exceptions.
 *
 * It treats exceptions when it was not possible to format some kind of data.
 */
class FormatError extends Error {
  /**
   * Constructs a FormatException object.
   * @param message The message to be shown.
   */
  constructor(public message: string) {
    super(message);

    this.name = 'FormatError';

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default FormatError;
