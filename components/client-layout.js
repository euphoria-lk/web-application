import ToolbarTop from "./toolbar-top";

function ClientLayout({ children }) {
    return (
        <div>
            <ToolbarTop/>
            { children }
        </div>
    );
}

export default ClientLayout;
