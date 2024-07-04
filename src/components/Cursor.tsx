import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

const OFFSET_CURSOR = 45;

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a');
    const cursor = document.getElementById('cursor') as HTMLDivElement;
    const cursorProject = document.getElementById('cursor-project') as HTMLDivElement;
    const projects = document.querySelectorAll<HTMLDivElement>('.project');
    cursor.style.transform = 'scale(1)';

    const onMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
    };

    const onMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
    };

    const handleOnMouseMove = (event: MouseEvent) => {
      const position = { x: event.clientX, y: event.clientY };
      if (ref.current) {
        ref.current.style.transform = `translateX(${position.x - OFFSET_CURSOR}px) translateY(${position.y - OFFSET_CURSOR}px) translateZ(0px)`;
      }
    };

    document.addEventListener('mousemove', handleOnMouseMove);

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave)
    });

    const onMouseEnterProject = (event: MouseEvent) => {
      event.preventDefault();
      cursorProject.style.transform = 'scale(1)';
      cursorProject.style.opacity = '1';
      document.body.classList.add('cursor-none');
      document.body.classList.remove('cursor-auto');
    }

    const onMouseLeaveProject = (event: MouseEvent) => {
      event.preventDefault();
      cursorProject.style.transform = 'scale(0)';
      cursorProject.style.opacity = '0';
      document.body.classList.add('cursor-auto');
      document.body.classList.remove('cursor-none');
    }

    projects.forEach((project) => {
      project.addEventListener('mouseenter', onMouseEnterProject);
      project.addEventListener('mouseleave', onMouseLeaveProject);
    })

    return () => {
      document.removeEventListener('mousemove', handleOnMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    }
  }, []);

  return (
    <div ref={ref} className="hidden md:block fixed top-0 left-0 z-[99999] pointer-events-none transition duration-0">
      <div id="cursor" className="absolute w-10 h-10" />
      <div id="cursor-project" className="backdrop-hue-rotate-180 relative block p-6 bg-black/40 rounded-full text-white transition" style={{ transform: 'scale(0)', opacity: '0'}}>
        <ArrowRightIcon className="relative transition z-[9999] -rotate-45" />
      </div>
    </div>
  );
}