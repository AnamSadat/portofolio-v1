// cadangan
export const code = `import type IDeveloperProfile from '@/types'

class DeveloperController extends Controller {
  protected developer: IDeveloperProfile = {
    name: 'Iqbal Prasetya',
    role: 'Software Engineer',
    experience: '2+ Years',
    location: 'Bogor, Indonesia',
  };

  public getDeveloperName(): string {
    return this.developer.name;
  }
}`;
