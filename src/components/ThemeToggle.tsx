import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="fixed top-6 right-6 z-50 btn-secondary group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 group-hover:rotate-12 transition-transform" />
      ) : (
        <Sun className="h-4 w-4 group-hover:rotate-12 transition-transform" />
      )}
    </Button>
  );
};

export default ThemeToggle;